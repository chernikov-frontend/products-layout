const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <button className="icon-switch" onClick={onSwitch}>
            <img src={`/icons/${icon}.svg`} alt="switch icon" />
        </button>
    );
};

export default IconSwitch;
