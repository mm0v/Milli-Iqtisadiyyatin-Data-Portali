import HocCompo from "./HocCompo";

const CompoOne = (props: any) => {

    const { count, incCount, reset } = props;

    return (
        <div style={{width:"20%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <p>Decrease:</p>
            {count}
            <button onClick={incCount}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default HocCompo(CompoOne);