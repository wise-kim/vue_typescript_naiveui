<script lang="ts" setup>
import { ref } from 'vue'
// import { useNotification } from 'naive-ui'
// import { useMessage } from 'naive-ui'
import type { FormInst, FormValidationError, FormRules } from 'naive-ui'

interface ModelType {
    regDt: string | null
    applyDt: string | null
    name: string | null
    idStart: number | null
    idEnd: number | null
    phone1: string | null
    phone2: number | null
    phone3: number | null
    sex: string | null
    mobileNo: number | null
    extraSupport: string | null
}

const phoneOptions = [
    { value: '02', label: '02' },
    { value: '031', label: '031' },
    { value: '032', label: '032' },
    { value: '033', label: '033' }
]

const formRef = ref<FormInst | null>(null)
// const notification = useNotification()
// const message = useMessage()

const rules: FormRules = {
    name: {
        required: true,
        trigger: ['input' /*, 'blur'*/],
        message: '이름은 필수 항목입니다'
    },
    idStart: {
        required: true,
        trigger: ['input'],
        message: '주민번호는 필수 항목입니다'
    },
    idEnd: {
        required: true,
        trigger: ['input'],
        message: '주민번호는 필수 항목입니다'
    },
    sex: {
        required: true,
        trigger: ['input'],
        message: '성별은 필수 항목입니다'
    }
}

const formValue = ref<ModelType>({
    regDt: new Date().toLocaleDateString('fr-CA'), // XXX date format YYYY-mm-dd인데 국가코드랑 날짜랑 상관없는건지...?
    applyDt: null,
    name: null,
    idStart: null,
    idEnd: null,
    phone1: '02',
    phone2: null,
    phone3: null,
    mobileNo: null,
    sex: null,
    extraSupport: null
})

const submit = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((error: Array<FormValidationError> | undefined) => {
        if (!error) {
            console.log(formValue)
        } else {
            console.log(error)
            // message.error('Invalid')
            // notification.success({
            //     closable: true,
            //     duration: 5000,
            //     content: '성공',
            //     meta: '메타'
            // })
        }
    })
}
</script>
<template>
    <n-layout>
        <n-layout-header style="height: 64px; padding: 24px" bordered>
            <n-h3 prefix="bar">지원신청서 등록 및 수정</n-h3>
        </n-layout-header>
        <n-layout has-sider content-style="padding :20px">
            <n-grid cols="6" item-responsive>
                <n-grid-item span="2">
                    <div>왼쪽 아이템</div>
                </n-grid-item>
                <n-grid-item span="4">
                    <n-h3 prefix="bar" type="primary">지원대상자 등록</n-h3>
                    <div>
                        <n-form ref="formRef" :model="formValue" :rules="rules">
                            <n-layout>
                                <n-table>
                                    <tr>
                                        <th scope="row">등록일</th>
                                        <td>{{ formValue.regDt }}</td>
                                        <th scope="row">접수일자</th>
                                        <td>
                                            <n-form-item path="applyDt" style="--n-label-height: 0">
                                                <!-- <n-input
                                                    v-model:value="formValue.applyDt"
                                                    placeholder=""
                                                /> -->
                                                <n-date-picker
                                                    type="date"
                                                    placeholder=""
                                                    v-model:value="formValue.applyDt"
                                                >
                                                </n-date-picker>
                                            </n-form-item>
                                        </td>
                                        <th scope="row">접수번호(자동)</th>
                                        <td>
                                            <n-input readonly placeholder=""> </n-input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">지역선택</th>
                                        <td></td>
                                        <th scope="row">접수번호(수동)</th>
                                        <td><n-input placeholder=""> </n-input></td>
                                        <th scope="row">차수</th>
                                        <td></td>
                                    </tr>
                                </n-table>
                            </n-layout>
                            <n-layout>
                                <n-ul>
                                    <n-li>지원대상자 정보</n-li>
                                </n-ul>
                                <n-table>
                                    <tr>
                                        <th scope="row">성명</th>
                                        <td>
                                            <n-space :wrap="false">
                                                <n-form-item
                                                    path="name"
                                                    style="--n-label-height: 0"
                                                >
                                                    <n-input
                                                        v-model:value="formValue.name"
                                                        placeholder=""
                                                    />
                                                </n-form-item>
                                                <n-button type="primary">중복확인</n-button>
                                            </n-space>
                                        </td>
                                        <th scope="row">주민번호</th>
                                        <td>
                                            <n-form-item path="idStart" style="--n-label-height: 0">
                                                <n-space :wrap="false" align="center">
                                                    <n-input
                                                        v-model:value="formValue.idStart"
                                                        type="number"
                                                        placeholder=""
                                                    ></n-input>
                                                    -
                                                    <n-input
                                                        v-model:value="formValue.idEnd"
                                                        type="number"
                                                        placeholder=""
                                                    ></n-input>
                                                </n-space>
                                            </n-form-item>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">주소</th>
                                        <td colspan="3">
                                            <n-space :vertical="true">
                                                <n-space :wrap="false" align="center">
                                                    <n-input-group>
                                                        <n-input-group-label>
                                                            우편번호
                                                        </n-input-group-label>
                                                        <n-input placeholder=""></n-input>
                                                    </n-input-group>
                                                    <n-button secondary type="primary"
                                                        >우편번호 찾기</n-button
                                                    >
                                                </n-space>
                                                <!-- <n-space
                                                    :wrap="false"
                                                    align="center"
                                                    justify="space-evenly"
                                                > -->
                                                <n-grid cols="5" align="center">
                                                    <n-grid-item span="3">
                                                        <n-input placeholder=""></n-input>
                                                    </n-grid-item>
                                                    <n-grid-item span="2">
                                                        <n-space :wrap="false" align="center">
                                                            <div style="text-indent: 8px">
                                                                나머지
                                                            </div>
                                                            <n-input placeholder=""></n-input>
                                                        </n-space>
                                                    </n-grid-item>
                                                </n-grid>
                                                <!-- </n-space> -->
                                            </n-space>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">전화번호</th>
                                        <td>
                                            <n-form-item style="--n-label-height: 0">
                                                <n-space :wrap="false" align="center">
                                                    <n-select
                                                        v-model:value="formValue.phone1"
                                                        :options="phoneOptions"
                                                    ></n-select
                                                    >- <n-input placeholder=""></n-input>-
                                                    <n-input type="number" placeholder=""></n-input>
                                                </n-space>
                                            </n-form-item>
                                        </td>
                                        <th scope="row">휴대폰번호</th>
                                        <td>
                                            <n-form-item style="--n-label-height: 0">
                                                <n-input-group>
                                                    <n-input
                                                        :style="{ width: '33%' }"
                                                        placeholder=""
                                                    />
                                                    <n-input
                                                        :style="{ width: '33%' }"
                                                        placeholder=""
                                                    />
                                                    <n-input
                                                        :style="{ width: '33%' }"
                                                        placeholder=""
                                                    />
                                                </n-input-group>
                                            </n-form-item>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">성별</th>
                                        <td colspan="3">
                                            <n-form-item path="sex" style="--n-label-height: 0">
                                                <n-radio-group v-model:value="formValue.sex">
                                                    <n-radio-button value="M">
                                                        남자
                                                    </n-radio-button>
                                                    <n-radio-button value="F">
                                                        여자
                                                    </n-radio-button>
                                                </n-radio-group>
                                            </n-form-item>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">추가지원</th>
                                        <td colspan="3">
                                            <n-form-item
                                                path="extraSupport"
                                                style="--n-label-height: 0"
                                            >
                                                <n-checkbox-group
                                                    v-model:value="formValue.extraSupport"
                                                >
                                                    <n-space :wrap="false">
                                                        <n-checkbox
                                                            value="의료나눔"
                                                            label="의료나눔"
                                                        />
                                                        <n-checkbox
                                                            value="1차공동모금회"
                                                            label="1차공동모금회"
                                                        />
                                                        <n-checkbox
                                                            value="2차공동모금회"
                                                            label="2차공동모금회"
                                                        />
                                                        <n-checkbox
                                                            value="수급자후원"
                                                            label="수급자후원"
                                                        />
                                                        <n-checkbox
                                                            value="매칭기부"
                                                            label="매칭기부"
                                                        />
                                                        <n-checkbox value="기타" label="기타" />
                                                        <n-checkbox value="없음" label="없음" />
                                                    </n-space>
                                                </n-checkbox-group>
                                            </n-form-item>
                                        </td>
                                    </tr>
                                </n-table>
                                <n-button type="primary" @click="submit"> 등록 및 수정 </n-button>
                            </n-layout>
                        </n-form>
                    </div>
                </n-grid-item>
            </n-grid>
        </n-layout>
    </n-layout>
</template>

<style lang="scss">
.n-form-item .n-form-item-feedback-wrapper {
    min-height: 0;
}

.n-table.n-table--single-line th {
    width: 8%;
    min-width: 100px;
    max-width: 140px;
}
.n-table.n-table--single-line td {
    min-width: 120px;
}
.n-base-selection-input {
    min-width: 80px;
}
</style>
