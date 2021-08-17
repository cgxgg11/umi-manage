/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-11 15:40:07
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 13:55:56
 */
import { FC, useState, useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import TableComponent from '@/components/tableComponent';
import ModalComponent from '@/components/modal'
import FilterRegion from './filter'
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SystemModelState, Loading } from '@/models/connect';
// import { SystemConfigProps } from './config'
interface SystemConfigProps {
    dispatch: Dispatch;
    systemConfig: SystemModelState;
    loading?: boolean;
}
type RecordType = {};
const SystemConfig: FC<SystemConfigProps> = ({ dispatch, systemConfig, loading }) => {
    // console.log(systemConfig, loading);
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({});
    const title = '更新配置';
    useEffect(() => {
        dispatch({
            type: 'systemConfig/queryConfigList',
            payload: {
                page: 1,
                size: 10
            },
        })
    }, []);

    const setStepFormValues = (record: any) => {
        console.log(record);
        setForm(record);

        setVisible(true)
    }

    const columns: ColumnsType<RecordType> = [
        {
            title: '规则ID',
            key: 'id',
            dataIndex: 'id',
            ellipsis: true,
        },
        {
            title: '规则名称',
            key: 'name',
            dataIndex: 'name',
            ellipsis: true,
        },
        {
            title: '操作',
            dataIndex: 'option',
            render: (_: any, record: any) => (
                <>
                    <Button onClick={() => setStepFormValues(record)} type='primary' size="small">编辑</Button>
                </>
            ),
        },
    ]
    const queryTableSource = [
        { name: '1:dddd1111', id: 1 },
        { name: '2:dddd22323', id: 2 },
        { name: '3:dddd2323', id: 3 }
    ]
    const submitForm = (e: any) => {
        const parm = {
            ...form,
            ...e,
        }
        console.log(e, parm, '2');
        dispatch({
            type: 'systemConfig/updateConfig',
            payload: {
                ...parm
            },
        })
        // setVisible(false)
    }
    return (
        <div>
            {/* <FilterRegion /> */}
            <TableComponent
                columns={columns}
                dataSource={queryTableSource}
                rowKey="id"
                loading={loading}
            />
            <ModalComponent
                visible={visible}
                title={title}
                onCancel={() => setVisible(false)}
                onOk={submitForm}
                form={form} />
        </div >
    )
}

export default connect(
    ({
        systemConfig,
        loading,
    }: {
        systemConfig: SystemModelState;
        loading: Loading;
    }) => ({
        systemConfig,
        loading: loading.models.queryTable,
    }),
)(SystemConfig);