import styled from "styled-components";

export const BreadcrumbsExample = () => (
  <Breadcrumbs>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/living">Living Room</Crumb>
    <Crumb href="/living/couch">Couches</Crumb>
    <Crumb href="/living/couch/sectional" isCurrentPage={true}>
      Sectionals
    </Crumb>
  </Breadcrumbs>
);

const Breadcrumbs: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbsList>{props.children}</BreadcrumbsList>
    </nav>
  );
};

type CrumbProps = React.PropsWithChildren<{
  href: string;
  isCurrentPage?: boolean;
}>;

const Crumb: React.FC<CrumbProps> = (props) => {
  return (
    <StyledCrumb>
      <StyledLink
        href={props.href}
        aria-current={props.isCurrentPage ? "page" : undefined}
      >
        {props.children}
      </StyledLink>
    </StyledCrumb>
  );
};

const BreadcrumbsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 1em;
  display: flex;
  justify-content: flex-start;
  color: #333;
`;

const StyledCrumb = styled.li`
  margin: 0;
  padding: 0;

  &:not(:last-of-type)::after {
    content: "";
    margin: 0 1em;
    display: inline-block;
    width: 1px;
    height: 0.7em;
    border-right: 1px solid #aaa;
    transform: rotate(30deg);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: revert;
  }
`;
