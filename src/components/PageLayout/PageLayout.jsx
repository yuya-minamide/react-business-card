import { Card } from "../index";
import data from "../../assets/data/cardData.json";
import styled from "styled-components";

const ContentLayout = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 49px;
	margin: 53px 82px;
`;

export function PageLayout() {
	return (
		<ContentLayout>
			{data.map((item) => (
				<Card
					key={item.email}
					fullName={item.fullName}
					avatar={item.avatar}
					title={item.title}
					email={item.email}
					about={item.about}
					interests={item.interests}
				/>
			))}
		</ContentLayout>
	);
}
