import React, { useEffect, useState } from "react";

const Home = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch("http://160.16.198.143:5000/data")
			.then((response) => {
				if (!response.ok) {
					throw new Error("データの取得に失敗しました");
				}
				return response.json();
			})
			.then((jsonData) => {
				setData(jsonData);
			})
			.catch((error) => {
				setError(error.massage);
			});
	});
	return (
		<div className='text-center'>
			<h1 className='text-4xl font-bold'>データ表示</h1>
			{error ? (
				<p className='text-red-500'>{error}</p>
			) : (
				<p>{JSON.stringify(data, null, 2)}</p>
			)}
		</div>
	);
};

export default Home;
