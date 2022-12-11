export default {
  darkMode: true,
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <abbr
        title="This site and all its content are licensed under a MIT License."
        style={{ cursor: "help" }}
      >
        MIT
      </abbr>{" "}
      <time>{new Date().getFullYear()}</time> © Xithrius.
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
};
