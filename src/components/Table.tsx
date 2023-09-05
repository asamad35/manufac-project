
import { ClassType, getMean, getMedian, getMode } from '../utils/utils'

const Table = ({ classObj, name }: { classObj: ClassType, name: string }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {Object.keys(classObj).map((key) => <th key={key}>Class {key}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{name} Mean</th>
                    {Object.keys(classObj).map((key, index) => {
                        return <td key={key}>{getMean(classObj[+key])} </td>
                    })}

                </tr>
                <tr>
                    <th>{name} Mean</th>
                    {Object.keys(classObj).map((key, index) => {
                        return <td key={key}>{getMode(classObj[+key])} </td>
                    })}

                </tr>
                <tr>
                    <th>{name} Mean</th>
                    {Object.keys(classObj).map((key, index) => {
                        return <td key={key}>{getMedian(classObj[+key])} </td>
                    })}

                </tr>
            </tbody>
        </table>
    )
}

export default Table