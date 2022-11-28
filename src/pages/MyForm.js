import { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../composants/Navbar';

function MyForm() {
    const navigate = useNavigate();
    const [types, setTypes] = useState({
        types: [],
        supertypes: [],
        subtypes: [],
    });

    const [filters, setFilters] = useState({
        name: '',
        set: '',
        types: '',
        subtypes: '',
        supertypes: '',
        colorIdentity: '',
        rarity: '',
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
    }, []);

    let superT = types.supertypes.map((type) => {
        return { name: type, id: 'supertypes' };
    });
    let t = types.types.map((type) => {
        return { name: type, id: 'types' };
    });
    let subT = types.subtypes.map((type) => {
        return { name: type, id: 'subtypes' };
    });

    let optionsColors = {
        options: [
            { name: 'White', id: 'colorIdentity' },
            { name: 'Blue', id: 'colorIdentity' },
            { name: 'Red', id: 'colorIdentity' },
            { name: 'Black', id: 'colorIdentity' },
            { name: 'Green', id: 'colorIdentity' },
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
            { name: 'Common', id: 'rarity' },
            { name: 'uncommon', id: 'rarity' },
            { name: 'rare', id: 'rarity' },
            { name: 'mythic rare', id: 'rarity' },
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

    const handleSubmit = (e) => {
        e.preventDefault();

        let filtersArray = Object.values(filters);

        let url = '/Deck/';

        filtersArray.forEach((chaine) => {
            if (chaine.length > 0) {
                if (url === '/Deck/') {
                    url += chaine;
                } else {
                    url += '&' + chaine;
                }
            }
        });

        if (url === '/Deck/') url = '/Deck/noFilters';
        navigate(url);
    };

    function onSelect(selectedList, removedItem) {
        const type = selectedList[0].id;
        if (selectedList.length > 0) {
            let chaine = type + '=';
            for (let i = 0; i < selectedList.length; i++) {
                let champs = selectedList[i].name;
                if (type === 'rarity' && champs === 'mythic rare')
                    champs = 'mythic';
                if (type === 'colorIdentity') {
                    switch (champs) {
                        case 'White':
                            champs = 'W';
                            break;
                        case 'Red':
                            champs = 'R';
                            break;
                        case 'Green':
                            champs = 'G';
                            break;
                        case 'Blue':
                            champs = 'U';
                            break;
                        case 'Black':
                            champs = 'B';
                            break;
                        default:
                    }
                }
                if (i !== selectedList.length - 1) {
                    chaine += champs + '|';
                } else {
                    chaine += champs;
                }
            }

            switch (type) {
                case 'subtypes':
                    setFilters({ ...filters, subtypes: chaine });
                    break;
                case 'types':
                    setFilters({ ...filters, types: chaine });
                    break;
                case 'supertypes':
                    setFilters({ ...filters, supertypes: chaine });
                    break;
                case 'colorIdentity':
                    setFilters({ ...filters, colors: chaine });
                    break;
                case 'rarity':
                    setFilters({ ...filters, rarity: chaine });
                    break;
                default:
                    console.log("ce filtre n'existe pas : " + type);
            }
        }
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
            <div className="center">
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
            <div className="navbar-container">
                <Navbar />
                <div>
                    <h1 className="pageTitle">Find your cards</h1>
                    <div className="border">
                        <form className="form" onSubmit={handleSubmit}>
                            <label className="label">
                                Filter by card name:{' '}
                            </label>
                            <input
                                id="name"
                                placeholder="name"
                                type="text"
                                onChange={(e) => handleChange(e)}
                            />

                            <label className="label">
                                Filter by set name:{' '}
                            </label>
                            <input
                                id="set"
                                placeholder="set"
                                type="text"
                                onChange={(e) => handleChange(e)}
                            />

                            <label className="label">
                                Filter by SuperTypes: (many choices possibles)
                            </label>

                            <Multiselect
                                options={optionsSuperTypes.options} // Options to display in the dropdown
                                selectedValues={optionsSuperTypes.selectedValue} // Preselected value to persist in dropdown
                                onSelect={onSelect} // Function will trigger on select event
                                onRemove={onRemove} // Function will trigger on remove event
                                displayValue="name"
                            />

                            <label className="label">
                                Filter by Types: (many choices possibles)
                            </label>

                            <Multiselect
                                options={optionsTypes.options} // Options to display in the dropdown
                                selectedValues={optionsTypes.selectedValue} // Preselected value to persist in dropdown
                                onSelect={onSelect} // Function will trigger on select event
                                onRemove={onRemove} // Function will trigger on remove event
                                displayValue="name"
                            />

                            <label className="label">
                                Filter by SubTypes: (many choices possibles)
                            </label>

                            <Multiselect
                                options={optionsSubTypes.options} // Options to display in the dropdown
                                selectedValues={optionsSubTypes.selectedValue} // Preselected value to persist in dropdown
                                onSelect={onSelect} // Function will trigger on select event
                                onRemove={onRemove} // Function will trigger on remove event
                                displayValue="name"
                            />

                            <label className="label">
                                Filter by Colors : (many choices possibles)
                            </label>

                            <Multiselect
                                options={optionsColors.options} // Options to display in the dropdown
                                selectedValues={optionsColors.selectedValue} // Preselected value to persist in dropdown
                                onSelect={onSelect} // Function will trigger on select event
                                onRemove={onRemove} // Function will trigger on remove event
                                displayValue="name"
                            />

                            <label className="label">Filter by Rarity : </label>

                            <Multiselect
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
            </div>
        );
    }
}

export default MyForm;
