import React from 'react'
import styled from 'styled-components'

const footer = styled.section`
width:"100%"
backgroundColor: "red"

`





export default class TiiFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (

            <footer>
                <div style={{
                    display: "flex",
                    flex: "1",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "horizontal"
                }}>

                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <p>Hello</p>
            </footer>
        )
    }
};