import { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

function MyForm() {
  const [url, setUrl  ] = useState("");

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

  function onSelect(selectedList, removedItem) { setUrl(selectedList);
  }

  function onRemove(selectedList, removedItem) { console.log(removedItem + "removed");
  }

  return (
    <div>
    <h1 className='pageTitle margin' >Find your card</h1>
    <div className='border'>
    <form className='form margin' onSubmit={handleSubmit}>
      <label className='label margin'>Filter by card name: </label>
        <input className='margin'
          type="text" 
          onChange={(e) => setUrl(e.target.value)}
        />

      <label className='label margin'>Filter by set name: </label>
        <input className='margin'
          type="text" 
          onChange={(e) => setUrl(e.target.value)}
        />
 
      <label className='label margin'>Filter by SuperTypes: (many choices possibles)</label>

      <Multiselect className='margin'
        options={optionsSuperTypes.options} // Options to display in the dropdown
        selectedValues={optionsSuperTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        displayValue="name"
      />

    <label className='label margin'>Filter by Types: (many choices possibles)</label>

      <Multiselect className='margin'
        options={optionsTypes.options} // Options to display in the dropdown
        selectedValues={optionsTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name"
      />

    <label className='label margin'>Filter by SubTypes: (many choices possibles)</label>

      <Multiselect className='margin'
        options={optionsSubTypes.options} // Options to display in the dropdown
        selectedValues={optionsSubTypes.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name"
      />

    <label className='label margin'>Filter by Colors : (many choices possibles)</label>

      <Multiselect className='margin'
        options={optionsColors.options} // Options to display in the dropdown
        selectedValues={optionsColors.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name"
      />

    <label className='label margin'>Filter by Rarity : </label>

      <Multiselect className='margin'
        options={OptionsRarity.options} // Options to display in the dropdown
        selectedValues={OptionsRarity.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name"
        selectionLimit="1"
      />

      <button className='button3' type="submit"> Filter </button>
    </form>
    </div>
    </div>
  )
}

export default MyForm;
