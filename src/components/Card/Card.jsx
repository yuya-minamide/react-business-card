import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { Contact } from "../index";
import styled from "styled-components";

const CardContainer = styled.div`
	width: 550px;
	text-align: center;
	background-color: var(--content-color-bg);
`;

const CardContainerInner = styled.div`
	width: 317px;
	margin: 44px auto;
`;

const Avatar = styled.img`
	width: 317px;
	height: 317px;
	border-radius: 14px 14px 0 0;
`;

const MainContainer = styled.main`
	background-color: #1a1b21;
	padding: 21px 35px 24px 35px;
`;

const Name = styled.h1`
	font-size: 25px;
	font-weight: bold;
`;

const PositionTitle = styled.p`
	font-size: 12.8px;
	color: var(--color-orange);
`;

const WebsiteLink = styled.a`
	color: var(--color-light-gray);
	font-size: 10.24px;
	display: block;
	margin: 9px 0 18px 0;
`;

const EmailButton = styled.a`
	display: inline-block;
	width: 247px;
	height: 34px;
	color: var(--color-dark-gray);
	background-color: var(--color-white);
	border-radius: 6px;
	text-align: center;
	padding-top: 5px;
`;

const EmailIcon = styled.p`
	margin-right: 9.6px;
	display: inline;
`;

const DescriptionContainer = styled.div`
	margin-top: 32px;
`;

const DescriptionTitle = styled.h2`
	color: var(--color-light-gray);
	font-size: 16px;
	text-align: left;
	font-weight: bold;
	margin-bottom: 5px;
`;

const DescriptionContent = styled.p`
	color: var(--color-gray);
	text-align: left;
	font-size: 10.24px;
`;

const Footer = styled.footer`
	background-color: #161619;
	padding: 20px 40px;
	border-radius: 0 0 14px 14px;
`;

export function Card({ fullName, avatar, title, email, about, interests }) {
	return (
		<CardContainer>
			<CardContainerInner>
				<Avatar src={avatar} alt="avatar" />
				<MainContainer>
					<Name>{fullName}</Name>
					<PositionTitle>{title}</PositionTitle>
					<WebsiteLink href="">Website Link</WebsiteLink>
					<EmailButton href={`mailto:${email}`}>
						<EmailIcon>
							<IconContext.Provider value={{ size: "12.8px" }}>
								<MdEmail />
							</IconContext.Provider>
						</EmailIcon>
						Email
					</EmailButton>
					<DescriptionContainer>
						<DescriptionTitle>About</DescriptionTitle>
						<DescriptionContent>{about}</DescriptionContent>
					</DescriptionContainer>
					<DescriptionContainer>
						<DescriptionTitle>Interests</DescriptionTitle>
						<DescriptionContent>{interests}</DescriptionContent>
					</DescriptionContainer>
				</MainContainer>
				<Footer>
					<Contact />
				</Footer>
			</CardContainerInner>
		</CardContainer>
	);
}
