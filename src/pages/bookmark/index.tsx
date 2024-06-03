import { useEffect, useState } from 'react'
import CommonHedaer from '@/components/common/header/CommonHedaer'
import Card from './components/Card'
// CSS
import styles from './styles/index.module.scss'
import { CardDTO } from '../index/types/card'

function index() {
    const [data, setData] = useState([])
    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if(getLocalStorage || !getLocalStorage === null) setData(getLocalStorage)
            else setData([])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHedaer />
            <main className={styles.page__contents}>
                {/* 만약, 데이터가 없으면 */}
                {data.length === 0 ? (
                    <div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다.</div>
                ) : (
                    data.map((item: CardDTO) => {
                        return <Card prop={item} key={item.id} />
                    })
                )}
            </main>
        </div>
    )
}

export default index