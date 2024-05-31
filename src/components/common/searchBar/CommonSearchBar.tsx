import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'
import styles from './CommonSearchBar.module.scss'

function CommonSearchBar() {
	const [search, setSearch] = useRecoilState(searchState)
	const [text, setText] = useState("")
	const onChange = (event) => {
		console.log(event.target.value)
		setText(event.target.value)
	}
	const onSearch = () => {
		if(text === "") {
			// input 태그 안에 빈 값을 검색하였을때 => searching default value
			setSearch("Korea")
		} else {
			setSearch(text) // 작성한 Input Value 값 할당
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if(event.key === "Enter") {
			if(text === "") {
				// input 태그 안에 빈 값을 검색하였을때 => searching default value
				setSearch("Korea")
			} else {
				setSearch(text) // 작성한 Input Value 값 할당
			}
		}
	}

	return (
		<div className={styles.searchBar}>
			<div className={styles.searchBar__search}>
				<input type="text" placeholder='찾으실 이미지를 검색해주세요.' className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown} />
				<img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
			</div>
		</div>
	)
}

export default CommonSearchBar