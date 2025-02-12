const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <button className="icon-switch" onClick={onSwitch}>
            <img src={`${import.meta.env.BASE_URL}icons/${icon}.svg`} alt="switch icon" />
        </button>
    );
};

export default IconSwitch;
