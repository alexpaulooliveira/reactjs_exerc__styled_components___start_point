import styled, { createGlobalStyle, css } from 'styled-components';

const LABEL_FONT_SIZE = '15px';
const LABEL_COLOR = '#555';
const INPUT_FONT_SIZE = '12px';
const INPUT_FOCUS_COLOR = '#F6DDDF';
const TITLE_COLOR = '#CCF';
const BORDER_ON_HOVER = '3px';


export const GlobalStyle = createGlobalStyle`

`

const inputs = css`

`

export const STitle = styled.h2`

`

export const SForm = styled.form`

`

export const SInput = styled.input`

`

export const SInputRadio = styled.input`

`

export const STextArea = styled.textarea`

`

export const SButton = styled.button<{fontColor?: string; backgroundColor?:string; onHoverBorderColor?:string; center?:boolean}>`

`

export const SFieldSet = styled.fieldset`

`

export const SError = styled.div`

`