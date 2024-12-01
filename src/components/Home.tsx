import React, { useEffect, useState } from "react";
// データの型定義
interface Data {
	name: string;
	age: number;
	_id?: string;
}
const Home = () => {
	// データ取得用のステート
	const [data, setData] = useState<Data[]>([]);
	// エラー用のステート
	const [error, setError] = useState<string | null>(null);
	// ローディング用のステート:trueの間ローディング中
	const [isLoading, setIsLoading] = useState<boolean>(true);
	// データ取得処理
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				// さくらVPSのIPアドレスを指定
				// data/[username]のエンドポイントにGETリクエストを送信
				const response = await fetch("http://160.16.198.143:3000/data/Kento");
				if (!response.ok) {
					throw new Error(`HTTPエラー 状態: ${response.status}`);
				}
				const result: Data[] = await response.json();
				const formattedData = Array.isArray(result) ? result : [result]; // 配列でない場合の対策
				// 取得したデータをステートにセット
				setData(formattedData);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	// エラー表示
	if (error) return <p className='text-center text-white'>エラー: {error}</p>;
	// ローディング表示
	if (isLoading)
		return <p className='text-center text-white'>ローディング中...</p>;
	// データ表示
	return (
		<div className='text-center  text-white h-screen'>
			<h1 className='text-4xl font-bold'>データ表示</h1>
			<ul>
				{data.map((item, index) => (
					<li key={index}>
						<p className='text-center '>名前:{item.name}</p>
						<p className='text-center '>年齢:{item.age}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
