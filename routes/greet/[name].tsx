import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div><p>
    Hello {props.params.name}
  </p>
  <p>
    <a href="/">Go Back</a>
  </p></div>;
}
