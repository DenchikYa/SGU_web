class Group {

    // два селекта
    availableList;
    selectedList;

    // массивы элементов селектов
    optionsOfAvailableList = [];
    optionsOfSelectedList = [];

    constructor(linkToAvailableList, linkToSelectedList, defaultValue) {
        this.availableList = linkToAvailableList;
        this.selectedList = linkToSelectedList;

        this.optionsOfAvailableList = defaultValue;

        this.updateOptions();
    }

    // ререндер
    updateOptions() {
        this.clearOptions();
    
        this.optionsOfAvailableList.forEach(option =>
            this.availableList.options.add(
            new Option(option)
          )
        );
    
        this.optionsOfSelectedList.forEach(option =>
            this.selectedList.options.add(
            new Option(option)
          )
        );
    };


    // очищаем списки
    clearOptions() {
        let i;
        for(i = this.availableList.options.length - 1 ; i >= 0 ; i--){
            this.availableList.remove(i);
        }
    
        for(i = this.selectedList.options.length - 1 ; i >= 0 ; i--){
            this.selectedList.remove(i);
        }
    }
    
    // рендерим списки
    renderOptions() {
        this.clearOptions();
    
        this.optionsOfAvailableList.forEach(option =>
            this.availableList.options.add(
            new Option(option)
          )
        );
    
        this.optionsOfSelectedList.forEach(option =>
            this.selectedList.options.add(
            new Option(option)
          )
        );
    };

    
    // переместить все элементы в список
    moveAllTo(moveTo) {
        if (moveTo === 'selected') {
            this.optionsOfSelectedList = this.optionsOfSelectedList.concat(this.optionsOfAvailableList);
            this.optionsOfAvailableList = [];
        } else {
            this.optionsOfAvailableList = this.optionsOfAvailableList.concat(this.optionsOfSelectedList);
            this.optionsOfSelectedList = [];
        }
    
        this.updateOptions();
    };
    
     // переместить элементы в список
    moveElementsTo(moveTo) {
        let selectedElements;
    
        if (moveTo === 'selected') {
            selectedElements = this.getSelectValues(this.availableList);
            
            if (selectedElements.length) {
                this.optionsOfSelectedList = this.optionsOfSelectedList.concat(selectedElements);
                this.optionsOfAvailableList = this.removeSelected(this.optionsOfAvailableList, selectedElements);
            } else {
                alert('Нет выделенных элементов');
            }
        } else {
            selectedElements = this.getSelectValues(this.selectedList);
            
            if (selectedElements.length) {
                this.optionsOfAvailableList = this.optionsOfAvailableList.concat(selectedElements);
                this.optionsOfSelectedList = this.removeSelected(this.optionsOfSelectedList, selectedElements);
            }else {
                alert('Нет выделенных элементов');
            }
        }
    
        this.updateOptions();
    };
    
    // получить выбранные значения списка
    getSelectValues(select) {
        let result = [];
        let options = select && select.options;
        let opt;
      
        for (let i=0, iLen=options.length; i<iLen; i++) {
          opt = options[i];
      
          if (opt.selected) {
            result.push(opt.text);
          }
        }

        return result;
    };
    

    // удалить выбранные значения из списка
    removeSelected(allElements, removableElements) {
        return allElements.filter(elem => !removableElements.find(removableElement => removableElement === elem));
    };
}


let Group1 = new Group(
    document.getElementById('list1'), 
    document.getElementById('list2'),
    [ 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5' ]
)