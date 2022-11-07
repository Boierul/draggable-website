import Preloader from "./preloader/Preloader";
import './App.css'
import Site from "./components/Site";
import React, {useEffect, useRef} from "react";

import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function App() {
    const [simulateLoading, setSimulateLoading] = React.useState(true)

    const dragInstance = useRef(null);
    const dragTarget = useRef(null);

    setTimeout(() => {
        setSimulateLoading(false)
    }, 3000)

    useEffect(() => {
        dragInstance.current = Draggable.create('.gallery', {
            inertia: true,
            bounds: 'body',
            onClick: (res) => {
                console.log(res);
            }
        });
    }, [simulateLoading]);

    return (
        <>
            {simulateLoading ?
                <Preloader/> :
                <div ref={dragTarget}>
                    <Site/>
                </div>
            }

            {/*<div ref={dragTarget}>*/}
            {/*    <Site/>*/}
            {/*</div>*/}
        </>
    )
        ;
}

export default App;

//TODO 3D background glob