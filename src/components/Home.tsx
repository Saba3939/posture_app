import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import React, { useEffect, useState } from "react";
// データの型定義
interface Data {
	name: string;
	posture: number;
	time: string;
	_id?: string;
}
const Home = () => {
	// データ取得用のステート
	const [data, setData] = useState<Data[]>([]);
	// エラー用のステート
	// データ取得処理
	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, "Users", "user1", "postures"),
			(snapshot) => {
				const fetchedData = snapshot.docs.map((doc) => {
					const data = doc.data();
					return {
						_id: doc.id,
						...data,
						time: data.time.toDate().toLocaleString(),
					};
				}) as Data[];
				setData(fetchedData);
			}
		);
		return () => unsubscribe();
	}, []);
	// データ表示
	return (
		<div className='text-center  text-white h-screen'>
			<h1 className='text-4xl font-bold'>データ表示</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>
						<p className='text-center '>姿勢:{item.posture}</p>
						<p className='text-center '>時間:{item.time}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
