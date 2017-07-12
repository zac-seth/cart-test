import React from "react"
import { styled } from "styletron-react"
import styles from "./styles"

export default styled("div", ({ cols }) => ({
    [styles.layout.breakpoints.largeScreens]: {
        flexGrow: cols
    }
}))