const root = document.getElementById("root");

window.addEventListener("DOMContentLoaded",() => {
  const upBanner = document.createElement("div");
  root.appendChild(upBanner);
  upBanner.classList.add("upBanner")

  console.dir(upBanner);

  const upBox = document.createElement("div");
  upBanner.appendChild(upBox)
  upBox.classList.add("upBox")

  const upBoxP = document.createElement("p");
  upBox.appendChild(upBoxP)
  upBoxP.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem eaque vitae velit dolor quasi tempora nihil, voluptatem sit, mollitia veniam doloribus quis ab placeat facere? Expedita sunt corporis totam officia adipisci aperiam, minima quos harum incidunt error nihil, nobis atque. <span style='color: red;'>Odit dolorem aspernatur reiciendis a architecto sint non illo, explicoremque? Eum, eius v</span>elit doloribus maxime magnam dicta a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Volup nobis atque. Odit dolorem aspernatur reiciendis a architecto sint non illo, explicoremque? Eum, eius velit doloribus maxime magnam dicta a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequuntur! Recusandae ti! Tempore ratione sap?"

  const upMidBox = document.createElement("div")
  upBanner.appendChild(upMidBox);
  upMidBox.classList.add("upMidBox");

  const upMidBoxh2 = document.createElement("h2");
  upMidBox.appendChild(upMidBoxh2);
  upMidBoxh2.textContent = "HTML TRAINING3"

  const upMidBoxp = document.createElement("p");
  upMidBox.appendChild(upMidBoxp);
  upMidBoxp.textContent = "Lorem ipsum dolor sit amet cont sint assumenda quo laboriosam, possimus explicabo est voluptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente erroruptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente errouptatum dolorum ex? Quasi quisquam aperiam tempora pariatur officia. Ipsa in tempore vero obcaecati sapiente erro nesciunt reiciendis quos, odit vel voluptatibus quis accusantium exercitationem nostrum non eos quisquam fuga repellendus, voluptatum culpa, quibusdam dolores officiis pariatur eaque! Impedit beatae libero, doloremque delectus ab veritatis! Fugiat dolorem, perferendis facilis quidem, rem laudantium doloremque reprehenderit quas, eum deserunt nemo excepturi earum ipsam pariatur assumenda"

  const upMidBoxh3 = document.createElement("h3");
  upMidBox.appendChild(upMidBoxh3);
  upMidBoxh3.textContent = "Lorem ipsum dolor sit amet. Nul?"

  const downBanner = document.createElement("div");
  root.appendChild(downBanner);
  downBanner.classList.add("downBanner");

  const downBox = document.createElement("div");
  downBanner.appendChild(downBox);
  downBox.classList.add("downBox");

  const downBoxp = document.createElement("p");
  downBox.appendChild(downBoxp);
  downBoxp.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum et in possimus rerum, eos est exercitationem, itaque assumenda culpa veniam fugit optio eligendi magni sed. Corporis soluta harum voluptatibus sequi, architecto itaque quam voluptatum alias, consequatur aliquid blanditiis dignissimos. Totam porro quia iste id, nulla voluptates laboriosam et quidem soluta a eius quod iure tempore dignissimos placeat nihil amet ea necessitatibus eveniet suscipit doloribus similique? Laboriosam ea veritatis eaque. Obcaecati delectus quae ut msamus alias quis architecto voluptate velit officiis saepe odio, esse hic molestias repellendus neque numquam delectus, ad repellat minus nisi dolorem quos itaque. Voluptatem explicabo quibusdam sint ipsum libero, ipsam quam corporis vel tempora impedit adipisci numquam.ellendus neque numquam delectellendus neque numquam delect"

  const downMidBox = document.createElement("div");
  downBanner.appendChild(downMidBox);
  downMidBox.classList.add("downMidBox");

  const downMidBoxh2 = document.createElement("h2");
  downMidBox.appendChild(downMidBoxh2);
  downMidBoxh2.textContent = "HTML TRAINING3";
  
  const downMidBoxp = document.createElement("p");
  downMidBox.appendChild(downMidBoxp);
  downMidBoxp.innerHTML = "<span style='color: red;'>Lorem ipsum dolor sit</span> amet consetio laboriosam perferendis beatae dolores inventore fugiat, incidunt voluptates voluptatibus ullam natus animi unde eum atque perspiciatis maiores, suscipit doloribus, exercitationem amet consectetur optio quaerat accusamus qui! Officiis distinctio id odit, consequuntur excepturi minus obcaecati numquam vero perferendis ull, impedit omnis aperiam et illum repellendus veritatis accusamus? Ea soluta eveniet non praesentium sint, sapiente doloribus numquam, excepturi corrupti perspiciatis ut reiciendis atque deleniti voluptate harum veritatis sunt, animi sequi molestias provident assumenda aliquam consectetur? Deleniti officiis fuga suscipit quasi quo sunt velit recusandae ea excepturi, voluptas hic?"

  const downRightBox = document.createElement("div");
  downBanner.appendChild(downRightBox);
  downRightBox.classList.add("downRightBox");

  const downRightBoxp = document.createElement("p");
  downRightBox.appendChild(downRightBoxp);
  downRightBoxp.innerHTML = "<span style='color: red;'>nis aaperiam ab quibusdam ducimus necessitatibus similique doloremque! Eligendi, temporibus. Quasi, rep</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, corporis. Porro recusandae, veritatis aliquid ducimus quo tenetur facere voluptatem velit magnam cum enim adipisci quae alias, molestias, fuga beatae perspiciatis sit harum corporis unde itaque maxime. Dignissimos omnis aaperiam ab quibusdam ducimus necessitatibus similique doloremque! Eligendi, temporibus. Quasi, repellat numquam dicta error sed similique a aliquam at ipsa dolores. Quae alias excepturi cum nobis odio, itaque laudantium in numquam ad ex repellat dicta. Atque, aliquid."
})