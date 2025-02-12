import { useState } from "react";
import IconSwitch from "./components/IconSwitch";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import products from "./data";

const Store = () => {
    const [view, setView] = useState("cards"); // "cards" или "list"

    const toggleView = () => {
        setView(view === "cards" ? "list" : "cards");
    };

    return (
        <div className="store-container">
            {/* Фиксированная кнопка переключения */}
            <div className="switch-container">
                <IconSwitch 
                    icon={view === "cards" ? "view_list" : "view_module"} 
                    onSwitch={toggleView} 
                />
            </div>

            {/* Контейнер товаров */}
            <div className="content-container">
                {view === "cards" ? <CardsView cards={products} /> : <ListView items={products} />}
            </div>
        </div>
    );
};

export default Store;
