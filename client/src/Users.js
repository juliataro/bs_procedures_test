import React from "react";
import { Table } from 'react-bootstrap';
import { Container } from "react-bootstrap";

export const Users = () => (

<Container style={{width: '1000em', paddingTop: '50px'}}>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Eesnimi</th>
                <th>Perekonnanimi</th>
                <th>Hüüdnimi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Julia</td>
                <td>Taro</td>
                <td>@JT</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Mary-Ann</td>
                <td>Talvistu</td>
                <td>@MT</td>
            </tr>
        </tbody>
    </Table>
    </Container>
);
