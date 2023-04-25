import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/reset.css'

// naive-ui
import {
    create,
    NMenu,
    NTabs,
    NTabPane,
    NTab,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutContent,
    NGrid,
    NGridItem,
    NH2,
    NH3,
    NForm,
    NFormItem,
    NFormItemRow,
    NInputGroup,
    NSelect,
    NRadioGroup,
    NRadioButton,
    NTable,
    NUl,
    NLi,
    NButton,
    NInput,
    NSpace,
    NDatePicker,
    NInputGroupLabel,
    NCheckboxGroup,
    NCheckbox
} from 'naive-ui'
const naive = create({
    components: [
        NMenu,
        NTabs,
        NTab,
        NTabPane,
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        NLayoutContent,
        NGrid,
        NGridItem,
        NH2,
        NH3,
        NForm,
        NFormItem,
        NFormItemRow,
        NInputGroup,
        NInputGroupLabel,
        NSelect,
        NRadioGroup,
        NRadioButton,
        NCheckboxGroup,
        NCheckbox,
        NTable,
        NUl,
        NLi,
        NButton,
        NInput,
        NSpace,
        NDatePicker
    ]
})

const app = createApp(App)

app.use(router).use(naive)

app.mount('#app')
