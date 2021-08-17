/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-12 10:34:41
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-13 17:02:31
 */
import React, { FC, useState, useEffect } from 'react';
import { Modal, Button, Input, Form, Space, Divider } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const { Item } = Form;
const { TextArea } = Input;
type RType = {};
const BasicLayout = styled.div`
text-align: right;
`
const ModalComponent = (props: any) => {
    const [forms] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const {
        title = '',
        visible = false,
        onOk = undefined,
        confirmLoading = false,
        onCancel = undefined,
        form,
    } = props;
    useEffect(() => { // 组件加载完成后
        forms.setFieldsValue({ name: form.name })
    })
    // 转义
    const onEscape = (e: any) => {

    }
    return (
        <Modal
            forceRender
            title={title}
            visible={visible}
            footer={null}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
        >
            <Form
                {...layout}
                initialValues={{ remember: true }}
                form={forms}
                onFinish={onOk}
                name="basic"
            >
                <Item label="配置" name="name" >
                    <TextArea />
                </Item>
                <Item wrapperCol={{ offset: 1, span: 23 }}>
                    <BasicLayout>
                        <Space >
                            <CopyToClipboard
                                text={form.name} // 需要复制的文本
                                onCopy={onEscape} // 复制完成的回调
                            >
                                <Button href="https://www.json.cn/json/jsononline.html" target="_blank">转义</Button>
                            </CopyToClipboard>
                            <Button onClick={onCancel} >取消</Button>
                            <Button type="primary" htmlType="submit">更新配置</Button>
                        </Space>
                    </BasicLayout>
                </Item>
            </Form>




        </Modal>
    )
}

export default ModalComponent;