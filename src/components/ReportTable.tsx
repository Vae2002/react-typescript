// import { Table } from "antd";
// import { UseGlobalStore } from "../store";

// export const ReportTable: React.FC = () => {
//     const dataSource = [
//         {
//           review_id:,
//           date: ,
//           stars: 1,
//           cool: 1,
//           funny: 1,
//           useful: 1,
//           text: 'lalala',
//         },
//       ];
      
//       const columns = [
//         {
//           title: 'Review ID',
//           dataIndex: 'review_id',
//           key: 'review_id',
//         },
//         {
//           title: 'Date',
//           dataIndex: 'date',
//           key: 'date',
//         },
//         {
//           title: 'Stars',
//           dataIndex: 'stars',
//           key: 'stars',
//         },
//         {
//           title: 'Cool',
//           dataIndex: 'cool',
//           key: 'cool',
//         },
//         {
//           title: 'Funny',
//           dataIndex: 'funny',
//           key: 'funny',
//         },
//         {
//           title: 'Useful',
//           dataIndex: 'useful',
//           key: 'useful',
//         },
//         {
//           title: 'Text',
//           dataIndex: 'text',
//           key: 'text',
//         },
//       ];
      
//       return <Table dataSource={UseGlobalStore((state) => state.reports)} columns={columns} />;
// }

import React from 'react';
import { Table } from 'antd';
import { useGlobalStore } from "../store/index";

interface Report {
    _id: string;
    date: string;
    stars: number;
    cool: number;
    funny: number;
    useful: number;
    text: string;
}

interface Props {
    recentReviews: Report[];
}

const ReportTable: React.FC<Props> = ({ recentReviews }) => {
    const reports = useGlobalStore((state) => state.reports);

    const columns = [
        {
            title: 'Review ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Stars',
            dataIndex: 'stars',
            key: 'stars',
        },
        {
            title: 'Cool',
            dataIndex: 'cool',
            key: 'cool',
        },
        {
            title: 'Funny',
            dataIndex: 'funny',
            key: 'funny',
        },
        {
            title: 'Useful',
            dataIndex: 'useful',
            key: 'useful',
        },
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
    ];

    return <Table dataSource={reports} columns={columns} />;
};

export default ReportTable;