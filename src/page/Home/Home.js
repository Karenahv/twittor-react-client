import React from "react";
import "./Home.scss";
import BasicLayout from "../../layout/BasicLayout";

export default function Home(props) {
    const {setRefresh} = props;
    return (

        <BasicLayout className="home" setRefresh={setRefresh}>
            <h2>Estamos en el Home</h2>
        </BasicLayout>


    );
}
