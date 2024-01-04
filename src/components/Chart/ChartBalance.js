import styled from "styled-components";
import ApexCharts from "react-apexcharts";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartBalance = ({
  data,
  axiosColor,
  chartColor,
  height,
  categoriesX,
  typeChart,
}) => {
  const chartData = {
    series: [
      {
        name: "Price",
        data: data,
      },
    ],
    options: {
      colors: [chartColor],
      fill: {
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          inverseColors: true,
          stops: [0, 100],
          colorStops: [
            {
              offset: 20,
              color: chartColor,
              opacity: 0.3,
            },
            {
              offset: 100,
              color: chartColor,
              opacity: 0,
            },
          ],
        },
      },
      chart: {
        width: "100%",
        height: "100%",
        type: typeChart,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        labels: {
          show: true,
        },
        categories: categoriesX,
      },
      yaxis: {
        labels: {
          show: true,
        },
        categories: [1.09, 1.18, 1.27, 1.36, 1.45],
      },
      tooltip: {
        y: {
          format: "",
          formatter: (value) => {
            return value;
          },
        },
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
    },
  };
  return (
    <StyledContainer color={axiosColor}>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type={chartData.options.chart.type}
        // eslint-disable-next-line no-restricted-globals
        height={height}
      />
    </StyledContainer>
  );
};

export default ChartBalance;

const StyledContainer = styled.div`
  .apexcharts-tooltip {
    color: #b9b8bb;
  }
  .apexcharts-tooltip.apexcharts-theme-light {
    /* background: rgba(110, 220, 181, 0.5); */
    background: linear-gradient(
      156.67deg,
      rgba(112, 112, 114, 0.4) 0.07%,
      rgba(100, 97, 113, 0.148) 99.07%
    );
    /* Secondary */

    border: 1.11291px solid #565660;
    border-radius: 8.90329px;
  }
  .apexcharts-tooltip-title {
    display: none;
  }
  .apexcharts-xaxistooltip {
    display: none;
  }
  .apexcharts-tooltip.apexcharts-theme-light {
    border: none;
  }
  .apexcharts-tooltip-text-y-label {
    display: none;
  }
  .apexcharts-tooltip-marker {
    margin-right: 0;
  }
  .apexcharts-tooltip-text-y-value {
    font-size: 16px;
  }
  .apexcharts-text.apexcharts-yaxis-label {
    fill: ${({ color }) => color};
  }
  .apexcharts-text.apexcharts-xaxis-label {
    fill: ${({ color }) => color};
  }
  > div:nth-child(2) > div {
    min-height: unset !important;
    margin-top: -23px;
  }
  height: 100%;
  width: 100%;
  @media screen and (max-height: 725px) {
    height: 200px;
  }
`;
