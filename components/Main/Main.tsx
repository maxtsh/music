import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./Main.styles";
import Switch from "../Switch";
import Slider from "../Slider";
import { FaCrown, FaPlay, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsStars, BsArrowRight, BsThreeDotsVertical } from "react-icons/bs";
import useReactQuery from "service/hooks/useReactQuery";
import type ReleaseType from "types/ReleaseTypes";
import { BASE_URL } from "Global/URLs";

const Main: React.FC = () => {
  const { data: session } = useSession();
  const { data } = useReactQuery<ReleaseType>({
    key: "releases",
    method: "GET",
    url: `${BASE_URL}/browse/new-releases?limit=6&country=SE`,
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
    enabled: !!session?.user?.accessToken,
  });

  console.log(data);

  return (
    <Container>
      <div className="topbar">
        <div className="topbar-searchbar">
          <AiOutlineSearch className="topbar-searchbar-icon" />
          <input className="topbar-searchbar-input" name="search" type="text" />
        </div>
        <div className="topbar-theme">
          <h5 className="topbar-theme-title">Dark Theme</h5>
          <Switch />
        </div>
      </div>
      <Slider />
      <div className="collections">
        <div className="collections-heading">
          <BsStars className="collections-heading-icon" />
          <h2 className="collections-heading-title">Top Collections</h2>
        </div>
        <div className="collections-more">
          <p className="collections-more-title">Show more</p>
          <BsArrowRight className="collections-more-icon" />
        </div>
      </div>
      <div className="trends">
        {data?.data.albums.items.map((item) => (
          <div key={item.id} className="trends-trend">
            <Image
              className="trends-trend-image"
              src={item?.images?.[0]?.url || "/no_image.png"}
              height="150px"
              width="150px"
              alt="trend-1"
            />
            <h5 className="trends-trend-title">{item?.name || ""}</h5>
            <p className="trends-trend-cat">{item?.type || ""}</p>
          </div>
        ))}
      </div>
      <div className="trendlist">
        <div className="trendlist-heading">
          <FaCrown className="trendlist-heading-icon" />
          <h2 className="trendlist-heading-title">100 Trending Musics</h2>
        </div>
        <div className="trendlist-wrapper">
          <table className="trendlist-wrapper-table">
            <thead className="trendlist-wrapper-table-head">
              <tr className="trendlist-wrapper-table-head-row">
                <th className="trendlist-wrapper-table-head-row-th">Rank</th>
                <th className="trendlist-wrapper-table-head-row-th">Cover</th>
                <th className="trendlist-wrapper-table-head-row-th">Singer</th>
                <th className="trendlist-wrapper-table-head-row-th">
                  Duration
                </th>
                <th className="trendlist-wrapper-table-head-row-th">
                  Favorite
                </th>
                <th className="trendlist-wrapper-table-head-row-th"></th>
              </tr>
            </thead>
            <tbody className="trendlist-wrapper-table-body">
              <tr className="trendlist-wrapper-table-body-row">
                <td className="trendlist-wrapper-table-body-row-td">#1</td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <div className="trendlist-wrapper-table-body-row-td-info">
                    <Image
                      className="trendlist-wrapper-table-body-row-td-info-img"
                      src="/tracks/tr-1.jpg"
                      width="50px"
                      height="50px"
                      alt="track-1"
                    />
                    <span className="trendlist-wrapper-table-body-row-td-info-name">
                      Easy On Me
                    </span>
                  </div>
                </td>
                <td className="trendlist-wrapper-table-body-row-td">Adelee</td>
                <td className="trendlist-wrapper-table-body-row-td">03:56</td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <FaRegHeart />
                </td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <BsThreeDotsVertical color="var(--gray-2)" />
                </td>
              </tr>
              <tr className="trendlist-wrapper-table-body-row active">
                <td className="trendlist-wrapper-table-body-row-td">
                  {/* #2 */}
                  <FaPlay color="var(--purple)" />
                </td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <div className="trendlist-wrapper-table-body-row-td-info">
                    <Image
                      className="trendlist-wrapper-table-body-row-td-info-img"
                      src="/tracks/tr-2.jpg"
                      width="50px"
                      height="50px"
                      alt="track-1"
                    />
                    <span className="trendlist-wrapper-table-body-row-td-info-name">
                      Stay
                    </span>
                  </div>
                </td>
                <td className="trendlist-wrapper-table-body-row-td">Adelee</td>
                <td className="trendlist-wrapper-table-body-row-td">03:56</td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <FaHeart color="var(--pink)" />
                </td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <BsThreeDotsVertical color="var(--gray-2)" />
                </td>
              </tr>
              <tr className="trendlist-wrapper-table-body-row">
                <td className="trendlist-wrapper-table-body-row-td">#3</td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <div className="trendlist-wrapper-table-body-row-td-info">
                    <Image
                      className="trendlist-wrapper-table-body-row-td-info-img"
                      src="/tracks/tr-3.jpg"
                      width="50px"
                      height="50px"
                      alt="track-1"
                    />
                    <span className="trendlist-wrapper-table-body-row-td-info-name">
                      Ease On Wave
                    </span>
                  </div>
                </td>
                <td className="trendlist-wrapper-table-body-row-td">Adelee</td>
                <td className="trendlist-wrapper-table-body-row-td">03:56</td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <FaRegHeart />
                </td>
                <td className="trendlist-wrapper-table-body-row-td">
                  <BsThreeDotsVertical color="var(--gray-2)" />
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Main;
