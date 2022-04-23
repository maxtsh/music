import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./Main.styles";
import Switch from "../Switch";
import Slider from "../Slider";
import { FaCrown, FaPlay, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsStars, BsArrowRight } from "react-icons/bs";

const Main: React.FC = () => {
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
        <div className="trends-trend">
          <Image
            className="trends-trend-image"
            src="/covers/cover-1.jpg"
            height="150px"
            width="150px"
            alt="trend-1"
          />
          <h5 className="trends-trend-title">Megamix Music</h5>
          <p className="trends-trend-cat">EDM</p>
        </div>
        <div className="trends-trend">
          <Image
            className="trends-trend-image"
            src="/covers/cover-2.jpg"
            height="150px"
            width="150px"
            alt="trend-1"
          />
          <h5 className="trends-trend-title">100 Best every song</h5>
          <p className="trends-trend-cat">Pop</p>
        </div>
        <div className="trends-trend">
          <Image
            className="trends-trend-image"
            src="/covers/cover-3.jpg"
            height="150px"
            width="150px"
            alt="trend-1"
          />
          <h5 className="trends-trend-title">Megamix Music</h5>
          <p className="trends-trend-cat">EDM</p>
        </div>
        <div className="trends-trend">
          <Image
            className="trends-trend-image"
            src="/covers/cover-4.jpg"
            height="150px"
            width="150px"
            alt="trend-1"
          />
          <h5 className="trends-trend-title">Megamix Music</h5>
          <p className="trends-trend-cat">EDM</p>
        </div>
        <div className="trends-trend">
          <Image
            className="trends-trend-image"
            src="/covers/cover-5.jpg"
            height="150px"
            width="150px"
            alt="trend-1"
          />
          <h5 className="trends-trend-title">Megamix Music</h5>
          <p className="trends-trend-cat">EDM</p>
        </div>
      </div>
      <div className="trendlist">
        <div className="trendlist-heading">
          <FaCrown className="trendlist-heading-icon" />
          <h2 className="trendlist-heading-title">100 Trending Musics</h2>
        </div>
        <div className="trendlist-wrapper">
          <table className="trendlist-wrapper-table">
            {/* <thead className="trendlist-wrapper-table-head">
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
            </thead> */}
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
