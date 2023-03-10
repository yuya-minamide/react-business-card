import { IconContext } from "react-icons";
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import styled from "styled-components";

export const SocialLink = styled.a`
	margin: 0 6px;
`;

const SOCIAL_CONTENTS = {
	twitter: {
		link: "",
		icon: <FaTwitterSquare />,
	},
	facebook: {
		link: "",
		icon: <FaFacebookSquare />,
	},
	instagram: {
		link: "",
		icon: <FaInstagramSquare />,
	},
	linkedin: {
		link: "",
		icon: <FaLinkedin />,
	},
	github: {
		link: "",
		icon: <FaGithubSquare />,
	},
};

export function Contact() {
	return Object.values(SOCIAL_CONTENTS).map((contact, index) => (
		<>
			<IconContext.Provider key={index} value={{ color: "#918E9B", size: "25px" }}>
				<SocialLink href={contact.link}>{contact.icon}</SocialLink>
			</IconContext.Provider>
		</>
	));
}
