// trafficdesign Tool UI Kit - ApexCharts Theme
import ApexCharts from 'apexcharts';

// Standard-Theme für alle Charts
export const trafficdesignChartTheme = {
  chart: {
    fontFamily: 'Inter, sans-serif',
    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      }
    }
  },
  colors: ['#00B3C7', '#22C55E', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6', '#EC4899'],
  theme: {
    mode: 'light',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      }
    },
    axisBorder: {
      color: '#E5E7EB'
    },
    axisTicks: {
      color: '#E5E7EB'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#6B7280',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      }
    }
  },
  tooltip: {
    theme: 'light',
    style: {
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif'
    },
    x: {
      format: 'dd MMM yyyy'
    }
  },
  legend: {
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    labels: {
      colors: '#374151'
    },
    markers: {
      width: 8,
      height: 8,
      radius: 12,
    }
  }
};

// Helper-Funktion zum Erstellen von Charts
export function createChart(element, options) {
  const mergedOptions = {
    ...trafficdesignChartTheme,
    ...options,
    chart: {
      ...trafficdesignChartTheme.chart,
      ...options.chart
    }
  };
  
  const chart = new ApexCharts(element, mergedOptions);
  chart.render();
  return chart;
}

// Export ApexCharts für globale Nutzung
window.ApexCharts = ApexCharts;
window.createChart = createChart;
window.trafficdesignChartTheme = trafficdesignChartTheme;


