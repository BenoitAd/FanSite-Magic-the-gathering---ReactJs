
function CardImage(props){
    if (!props.show) {
        return null;
    }
        return (
            <div className='modal' onClick={props.onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h4 className='modal-title'>Card artwork</h4>
                    </div>
                    <div className='modal-body'>
                        <img src={props.url} alt={props.name} />
                    </div>

                    <div className='modal-footer'>
                        <button className='modal-bouton' onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

export default CardImage;
