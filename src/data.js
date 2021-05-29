import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E5AF4F", "#E7C381"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
    },
    {
      name: "Low Rider",
      artist: "Evil Needle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E5AF4F", "#E7C381"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17090",
    },
    {
      name: "Lonely Waves",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5A3A6A", "#101332"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
    },
    {
      name: "Playful Obsession",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5A3A6A", "#101332"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14983",
    },
    {
      name: "Body N Soul",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/cd04019ad86a69702fe55867d38a5b13dff95d73-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E57C67", "#847E6C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2084",
    },
    {
      name: "All Your Love",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/cd04019ad86a69702fe55867d38a5b13dff95d73-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E57C67", "#847E6C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2086",
    },
  ];
}

export default chillHop;
