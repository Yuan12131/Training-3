function createElement(type, props, ...children) {
  return { type, props, children };
}

function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }

  const element = document.createElement(virtualDom.type);

  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }

  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }

  return element;
}

function component2(elementNode, attributes, children) {
  let elementStr = `<${elementNode}`;

  for (let key in attributes) {
    elementStr += ` ${key}="${attributes[key]}"`;
  }

  elementStr += ">";

  if (children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        elementStr += child;
      } else {
        elementStr += component(
          child.elementNode,
          child.attributes,
          child.children
        );
      }
    });
  }

  elementStr += `</${elementNode}>`;

  return elementStr;
}

const upBanner = createElement(
  "div",
  {
    class: "upBanner",
    style:
      "width: 90vw; height: 40vh; background-color: #D9D9D9; display: flex; align-items: center; padding: 1.5vw; margin-bottom: 5vh;",
  },
  createElement(
    "div",
    {
      class: "upBox",
      style:
        "width: 30%; height: 95%; background-color: #E7E7E7; padding: 1vw;",
    },
    createElement(
      "p",
      {},
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem eaque vitae velit dolor quasi tempora nihil, voluptatem sit, mollitia veniam doloribus quis ab placeat facere?",
      createElement(
        "p",
        { style: "color: red;" },
        "Odit dolorem aspernatur reiciendis a architecto sint non illo, explicoremque? Eum, eius velit doloribus maxime magnam dicta a.",
        createElement(
          "p",
          {style: "color: black;"},
          "elit doloribus maxime magnam dicta a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Volup nobis atque. Odit dolorem aspernatur reiciendis a architecto sint non illo, explicoremque? Eum, eius velit doloribus maxime magnam dicta a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequuntur! Recusandae ti! Tempore ratione sap?"
        )
      )
    )
  ),
  createElement(
    "div",
    {
      class: "upMidBox",
      style: "width: 70%; height: 95%; margin-left: 2vw;",
    },
    createElement(
      "h2",
      { style: "font-size: 2rem; margin-bottom: 2vw; font-weight:400;" },
      "HTML TRAINING3"
    ),
    createElement(
      "p",
      { style: 'margin-bottom: 2vw;' },
      "Lorem ipsum dolor sit amet cont sint assumenda quo laboriosam, possimus explicabo est voluptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente erroruptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente errouptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente erro nesciunt reiciendis quos, odit vel voluptatibus quis accusantium exercitationem nostrum non eos quisquam fuga repellendus, voluptatum culpa, quibusdam dolores officiis pariatur eaque! Impedit beatae libero, doloremque delectus ab veritatis! Fugiat dolorem, perferendis facilis quidem, rem laudantium doloremque reprehenderit quas, eum deserunt nemo excepturi earum ipsam pariatur assumenda"
    ),
    createElement(
      "h3",
      {
        style:
          "font-size: 3rem; font-style: italic; color: #8D8D8D; font-weight:400;",
      },
      "Lorem ipsum dolor sit amet. Nul?"
    )
  )
);

const downBanner = createElement(
  "div",
  {
    class: "downBanner",
    style:
      "width: 90vw; height: 40vh; background-color: #D9D9D9;display: flex; align-items: center; padding: 1.5vw;",
  },
  createElement(
    "div",
    {
      class: "downBox",
      style: "width: 30%; height: 90%; margin-top: 5vh;",
    },
    createElement(
      "p",
      {},
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum et in possimus rerum, eos est exercitationem, itaque assumenda culpa veniam fugit optio eligendi magni sed. Corporis soluta harum voluptatibus sequi, architecto itaque quam voluptatum alias, consequatur aliquid blanditiis dignissimos. Totam porro quia iste id, nulla voluptates laboriosam et quidem soluta a eius quod iure tempore dignissimos placeat nihil amet ea necessitatibus eveniet suscipit doloribus similique? Laboriosam ea veritatis eaque. Obcaecati delectus quae ut msamus alias quis architecto voluptate velit officiis saepe odio, esse hic molestias repellendus neque numquam delectus, ad repellat minus nisi dolorem quos itaque. Voluptatem explicabo quibusdam sint ipsum libero, ipsam quam corporis vel tempora impedit adipisci numquam.ellendus neque numquam delectellendus neque numquam delect"
    )
  ),
  createElement(
    "div",
    {
      class: "downMidBox",
      style: "width: 45%; height: 95%; margin-left: 2vw; margin-right: 2vw;",
    },
    createElement(
      "h2",
      {
        style:
          "font-size: 2rem; font-weight: 400; margin-top: 2vw; margin-bottom: 2vw;",
      },
      "HTML TRAINING3"
    ),
    createElement(
      "p",
      { style: "color: red;" },
      "Lorem ipsum dolor sit",
      createElement("p", { style: "color: black;" }, "amet consetio laboriosam perferendis beatae dolores inventore fugiat, incidunt voluptates voluptatibus ullam natus animi unde eum atque perspiciatis maiores, suscipit doloribus, exercitationem amet consectetur optio quaerat accusamus qui! Officiis distinctio id odit, consequuntur excepturi minus obcaecati numquam vero perferendis ull, impedit omnis aperiam et illum repellendus veritatis accusamus? Ea soluta eveniet non praesentium sint, sapiente doloribus numquam, excepturi corrupti perspiciatis ut reiciendis atque deleniti voluptate harum veritatis sunt, animi sequi molestias provident assumenda aliquam consectetur? Deleniti officiis fuga suscipit quasi quo sunt velit recusandae ea excepturi, voluptas hic?")
    )
  ),
  createElement(
    "div",
    {
      class: "downRightBox",
      style: "width: 25%; height: 90%; margin-top: 5vh;",
    },
    createElement(
      "p",
      { style: "color: red;" },
      "nis aaperiam ab quibusdam ducimus necessitatibus similique doloremque! Eligendi, temporibus. Quasi, rep",
      createElement(
        "p",
        { style: "color: black;" },
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, corporis. Porro recusandae, veritatis aliquid ducimus quo tenetur facere voluptatem velit magnam cum enim adipisci quae alias, molestias, fuga beatae perspiciatis sit harum corporis unde itaque maxime. Dignissimos omnis aaperiam ab quibusdam ducimus necessitatibus similique doloremque! Eligendi, temporibus. Quasi, repellat numquam dicta error sed similique a aliquam at ipsa dolores. Quae alias excepturi cum nobis odio, itaque laudantium in numquam ad ex repellat dicta. Atque, aliquid."
      )
    )
  )
);

const root = document.getElementById("root");
const upBannerElement = render(upBanner);
root.appendChild(upBannerElement);
const downBannerElement = render(downBanner);
root.appendChild(downBannerElement);