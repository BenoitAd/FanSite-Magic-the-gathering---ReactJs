import { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

function MyForm() {
  const [name, setName  ] = useState("");

  var optionsColors = {
    options: [{name: 'White', id: 1},{name: 'Blue', id: 2},{name: 'Red', id: 2}]
  };

  var optionsSuperTypes = {
    options: [{name: 'Option 1️', id: 1},{name: 'Option 2️', id: 2}]
  };

  var optionsTypes = {
      options: [{name: 'Option 1️', id: 1},{name: 'Option 2️', id: 2}]
  };

  var optionsSubTypes = {
    options: [{name: 'Option x', id: 1},{name: 'Option y', id: 2}]
  };

  var OptionsRarity = {
    options: [{name: 'Option x', id: 1},{name: 'Option y', id: 2}]
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  function onSelect(selectedList, removedItem) { console.log(removedItem + "select");
  }

  function onRemove(selectedList, removedItem) { console.log(removedItem + "removed");
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Card name: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      <label>Set name: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 
      <Multiselect
        options={optionsSuperTypes.optionsColorsoptions} // Options to display in the dropdown
        selectedValues={optionsSuperTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />

      <Multiselect
        options={optionsTypes.options} // Options to display in the dropdown
        selectedValues={optionsTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />

      <Multiselect
        options={optionsSubTypes.options} // Options to display in the dropdown
        selectedValues={optionsSubTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />

      <Multiselect
        options={optionsColors.options} // Options to display in the dropdown
        selectedValues={optionsColors.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />

      <Multiselect
        options={OptionsRarity.options} // Options to display in the dropdown
        selectedValues={OptionsRarity.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />

      <button type="submit"> Find Cards </button>
    </form>
  )
}

export default MyForm;
