//'useClient'

import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
button{cursor: pointer}
.styledLink{text-decoration:none; border: 1px solid green; margin: 5px;}
.file-base label{margin-left:90px;},
          input[type="file" i]::-webkit-file-upload-button{border-radius:20px;}
`
