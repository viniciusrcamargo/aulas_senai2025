import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';

export default function CompBootstrap(){
    return(
        <div className="container">
            <h1 className="text-center">Vai Corinthians!</h1>
            <button className="btn btn-primary">Gol do Timão</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
            <hr/>
        </div>
    )
}
