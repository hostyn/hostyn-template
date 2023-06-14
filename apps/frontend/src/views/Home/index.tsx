import { styled } from "styled-components";
import Span from "ui/components/Span";
import Text from "ui/components/Text";
import Title from "ui/components/Title";
import colors from "ui/config/theme";

const HomeDiv = styled.div`
  min-height: inherit;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

const TechnologiesGrid = styled.div`
  width: 50rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const TechnologyCard = styled.a`
  display: flex;
  flex-direction: column;

  border: 2px solid ${colors.primary[100]};
  border-radius: 10px;
  padding: 1.5rem;
  gap: 0.7rem;

  text-decoration: none;

  transition: 0.2s;

  color: ${colors.primary[100]};
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.primary[500]};
    color: ${colors.primary[500]};
  }
`;

export default function Home() {
  return (
    <HomeDiv>
      <Title fontSize="3rem" fontWeight="bold">
        <Span>HOSTYN</Span> TEMPLATE
      </Title>
      <Text fontSize="1.5rem">
        Get started by editing{" "}
        <Span
          color={colors.primary[100]}
          background={colors.grey[700]}
          borderRadius="5px"
          padding="0 5px"
        >
          apps/frontend/src/views/Home/index.tsx
        </Span>
      </Text>
      <TechnologiesGrid>
        <TechnologyCard href="https://nextjs.org/" target="_blank">
          <Title>NEXT.JS</Title>
          <Text>Full-stack web applications</Text>
        </TechnologyCard>
        <TechnologyCard href="https://trpc.io/" target="_blank">
          <Title>TRPC</Title>
          <Text>End-to-end typesafe API</Text>
        </TechnologyCard>
        <TechnologyCard href="https://www.prisma.io/" target="_blank">
          <Title>PRISMA</Title>
          <Text>Next-generation TypeScript ORM</Text>
        </TechnologyCard>
        <TechnologyCard
          href="https://github.com/vvo/iron-session"
          target="_blank"
        >
          <Title>IRON-SESSION</Title>
          <Text>Next.js stateless session utility</Text>
        </TechnologyCard>
      </TechnologiesGrid>
    </HomeDiv>
  );
}
