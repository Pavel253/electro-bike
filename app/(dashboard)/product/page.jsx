import Product from "./Product";


export default function Page({handleClickFon, activeFon, setActiveFon}) {

    return (
        <div>
            <Product
                handleClickFon={handleClickFon}
                activeFon={activeFon}
                setActiveFon={setActiveFon}
            />
        </div>
    )
}