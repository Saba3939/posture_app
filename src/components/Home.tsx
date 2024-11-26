import React, { useEffect, useState } from "react";
interface Data {
	name: string;
	age: number;
	_id?: string;
}
const Home = () => {
	const [data, setData] = useState<Data | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("http://160.16.198.143:3000/data/Kento");
				if (!response.ok) {
					throw new Error(`HTTPエラー 状態: ${response.status}`);
				}
				const result: Data = await response.json();
				setData(result);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	if (isLoading) return <p>読み込み中</p>;
	if (error) return <p>エラー: {error}</p>;
	return (
		<div className='text-center'>
			<h1 className='text-4xl font-bold'>データ表示</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default Home;
