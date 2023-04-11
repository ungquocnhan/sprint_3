import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import LoginAccount2 from "../router/router_e2/LoginAccount2";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/LoginAccount2">
                <LoginAccount2/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
