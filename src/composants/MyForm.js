import { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';

function MyForm() {
    const [urlValue, setUrl] = useState(
        'https://api.magicthegathering.io/v1/cards'
    );
    const [types, setTypes] = useState({
        types: [],
        supertypes: [],
        subtypes: [],
    });

    const [filters, setFilters] = useState({
        name: '',
        set: '',
    });

    const urls = [
        'https://api.magicthegathering.io/v1/types',
        'https://api.magicthegathering.io/v1/subtypes',
        'https://api.magicthegathering.io/v1/supertypes',
    ];

    const getData = async (myUrl) => {
        const { data } = await axios.get(myUrl);
        const key = Object.keys(data)[0];
        setTypes((lastType) => ({ ...lastType, [key]: data[key] }));
    };

    useEffect(() => {
        urls.map((url) => getData(url));
        setFilters(filters);
        // console.log(urlValue);
    }, []);

    let superT = types.supertypes.map((type) => {
        return { name: type, id: type };
    });
    let t = types.types.map((type) => {
        return { name: type, id: type };
    });
    let subT = types.subtypes.map((type) => {
        return { name: type, id: type };
    });

    let optionsColors = {
        options: [
            { name: 'White', id: 1 },
            { name: 'Blue', id: 2 },
            { name: 'Red', id: 3 },
            { name: 'Black', id: 4 },
            { name: 'Green', id: 5 },
        ],
    };

    let optionsSuperTypes = {
        options: superT,
    };

    let optionsTypes = {
        options: t,
    };

    let optionsSubTypes = {
        options: subT,
    };

    let OptionsRarity = {
        options: [
            { name: 'Common', id: 1 },
            { name: 'uncommon', id: 2 },
            { name: 'rare', id: 3 },
            { name: 'mythic rare', id: 4 },
        ],
    };

    const handleChange = (e) => {
        if (e.target.id === 'name') {
            const name = 'name=' + e.target.value;
            setFilters({ ...filters, name: name });
        }
        if (e.target.id === 'set') {
            const set = 'set=' + e.target.value;
            setFilters({ ...filters, set: set });
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        let filtersArray = Object.values(filters);

        let url = urlValue;
        filtersArray.forEach((chaine, indice) => {
            if (indice === 0 && chaine !== '') {
                url += '?' + chaine;
            } else if (chaine !== '') {
                url += '&' + chaine;
            }
        });

        setUrl(url);
    }

    function onSelect(selectedList, removedItem) {
        setUrl(selectedList);
    }

    function onRemove(selectedList, removedItem) {
        return;
    }

    if (
        types.subtypes.length === 0 ||
        types.supertypes.length === 0 ||
        types.types.length === 0
    ) {
        return (
            <div class="center">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="pageTitle margin">Find your card</h1>
                <div className="border">
                    <form className="form margin" onSubmit={handleSubmit}>
                        <label className="label margin">
                            Filter by card name:{' '}
                        </label>
                        <input
                            className="margin"
                            id="name"
                            placeholder="name"
                            type="text"
                            onChange={(e) => handleChange(e)}
                        />

                        <label className="label margin">
                            Filter by set name:{' '}
                        </label>
                        <input
                            id="set"
                            placeholder="set"
                            className="margin"
                            type="text"
                            onChange={(e) => handleChange(e)}
                        />

                        <label className="label margin">
                            Filter by SuperTypes: (many choices possibles)
                        </label>

                        <Multiselect
                            className="margin"
                            options={optionsSuperTypes.options} // Options to display in the dropdown
                            selectedValues={optionsSuperTypes.selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name"
                        />

                        <label className="label margin">
                            Filter by Types: (many choices possibles)
                        </label>

                        <Multiselect
                            className="margin"
                            options={optionsTypes.options} // Options to display in the dropdown
                            selectedValues={optionsTypes.selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name"
                        />

                        <label className="label margin">
                            Filter by SubTypes: (many choices possibles)
                        </label>

                        <Multiselect
                            className="margin"
                            options={optionsSubTypes.options} // Options to display in the dropdown
                            selectedValues={optionsSubTypes.selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name"
                        />

                        <label className="label margin">
                            Filter by Colors : (many choices possibles)
                        </label>

                        <Multiselect
                            className="margin"
                            options={optionsColors.options} // Options to display in the dropdown
                            selectedValues={optionsColors.selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name"
                        />

                        <label className="label margin">
                            Filter by Rarity :{' '}
                        </label>

                        <Multiselect
                            className="margin"
                            options={OptionsRarity.options} // Options to display in the dropdown
                            selectedValues={OptionsRarity.selectedValue} // Preselected value to persist in dropdown
                            onSelect={onSelect} // Function will trigger on select event
                            onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name"
                            selectionLimit="1"
                        />

                        <button className="button3" type="submit">
                            Filter
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default MyForm;
