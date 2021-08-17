/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-12 10:42:41
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-12 11:08:20
 */
/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-12 10:34:41
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-12 10:42:13
 */
import React, { FC, useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal';

const { TextArea } = Input;

type RType = {};
const ModalComponent: FC<ModalProps> = props => {
    const {
        title = '',
        visible = false,
        onOk = undefined,
        confirmLoading = false,
        onCancel = undefined,
    } = props;
    return (
        <Modal
            title="Title"
            visible={visible}
            onOk={onOk}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
        >
            <div><TextArea rows={40} /></div>
        </Modal>
    )
}
