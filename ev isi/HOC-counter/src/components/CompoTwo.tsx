import HocCompo from "./HocCompo";

const CompoTwo = (props: any) => {

    const { count, deCount, reset } = props;

    return (
        <div style={{width:"20%", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <p>Increase :</p>
            {count}
            <button onClick={deCount}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default HocCompo(CompoTwo);

