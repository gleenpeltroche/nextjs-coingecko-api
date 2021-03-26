import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
          <svg width="600px" height="350px" viewBox="0 0 3037 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <g id="data_mining" clip-path="url(#clip_1)">
    <g id="noun_rock_3005158" transform="translate(1816 66)">
      <g id="Group">
        <path d="M1003 26.9842C1003 19.4979 999.393 12.349 993.042 7.24407C986.69 2.13913 978.154 -0.45803 969.503 0.0664611L756.744 12.9966C750.747 13.3609 744.998 15.2076 740.184 18.3157L617.423 97.5797C613.716 99.9728 610.671 103.046 608.509 106.575L535.455 225.837L511.073 224.277L322.497 128.796C313.673 124.33 302.876 123.863 293.579 127.547L18.2284 236.646C17.9975 236.737 17.7785 236.845 17.5516 236.941C17.2073 237.086 16.863 237.231 16.5247 237.388C15.8537 237.698 15.2004 238.025 14.5647 238.373C14.3554 238.487 14.1461 238.604 13.9407 238.724C13.2698 239.108 12.6223 239.516 11.9945 239.941C11.7812 240.086 11.5719 240.236 11.3607 240.386C10.7387 240.83 10.1382 241.29 9.56309 241.771C9.47898 241.84 9.38705 241.899 9.3049 241.97C9.27751 241.994 9.25404 242.021 9.22666 242.043C8.56356 242.613 7.93567 243.208 7.33516 243.825C7.15912 244.006 6.99481 244.191 6.82464 244.373C6.408 244.824 6.01092 245.286 5.62949 245.758C5.45149 245.979 5.26762 246.198 5.09549 246.422C4.63387 247.033 4.19571 247.657 3.79277 248.298C3.63824 248.544 3.50327 248.797 3.35657 249.046C3.09446 249.495 2.84409 249.947 2.61132 250.407C2.46462 250.697 2.32378 250.988 2.18881 251.281C1.95604 251.79 1.74479 252.31 1.54723 252.833C1.46899 253.04 1.37901 253.242 1.30664 253.45C1.06018 254.165 0.852836 254.892 0.674836 255.625C0.618111 255.856 0.577034 256.089 0.526177 256.322C0.408815 256.875 0.311012 257.433 0.234727 257.996C0.201474 258.239 0.168221 258.482 0.142793 258.725C0.0743313 259.376 0.0332544 260.03 0.0195621 260.691C0.0176061 260.816 0.00391376 260.943 0.00391376 261.068C0.00391376 261.1 0 261.13 0 261.162L0 832.564C0 833.455 0.0547709 834.343 0.156485 835.231C0.201474 835.618 0.28754 835.995 0.350133 836.377C0.430331 836.866 0.496836 837.357 0.610287 837.841C0.713957 838.288 0.856748 838.72 0.985847 839.158C1.10712 839.573 1.21275 839.991 1.3575 840.401C1.51007 840.831 1.69785 841.246 1.87193 841.668C2.04211 842.078 2.19859 842.491 2.39224 842.894C2.58198 843.285 2.80301 843.661 3.01231 844.044C3.23921 844.461 3.45437 844.879 3.7067 845.287C3.9336 845.651 4.1918 845.995 4.43631 846.349C4.71406 846.751 4.97813 847.159 5.28327 847.55C5.59037 847.945 5.93072 848.314 6.26129 848.694C6.54296 849.017 6.80507 849.351 7.1063 849.668C7.75962 850.355 8.4501 851.014 9.17971 851.642C9.18362 851.645 9.18753 851.648 9.18949 851.652C9.2912 851.74 9.40465 851.814 9.50832 851.9C10.1401 852.429 10.7895 852.944 11.4702 853.426C11.8438 853.691 12.237 853.92 12.6204 854.168C13.0527 854.446 13.4771 854.735 13.927 854.994C14.3808 855.256 14.8503 855.483 15.3158 855.723C15.7266 855.934 16.1276 856.155 16.5501 856.35C17.0254 856.57 17.5144 856.755 17.9995 856.952C18.4396 857.131 18.8739 857.322 19.3257 857.482C19.7971 857.651 20.2783 857.785 20.7556 857.934C21.2407 858.084 21.7199 858.244 22.2148 858.374C22.6921 858.499 23.1772 858.59 23.6583 858.694C24.165 858.804 24.6677 858.927 25.1841 859.015C25.7357 859.109 26.2912 859.165 26.8467 859.234C27.3024 859.29 27.7504 859.364 28.212 859.405C29.237 859.49 30.2658 859.538 31.2967 859.538L876.084 859.538C876.156 859.538 876.229 859.544 876.301 859.544C876.376 859.544 876.45 859.538 876.522 859.538L971.701 859.538C981.059 859.538 989.926 855.927 995.87 849.697C1000.38 844.968 1002.84 839.104 1002.98 833.092C1002.99 832.922 1003 832.748 1003 832.554L1003 26.9842L1003 26.9842ZM738.1 87.0167L660.573 137.074L603.575 230.125L846.226 245.653L846.301 245.658L846.428 245.666C847.343 245.725 848.247 245.821 849.139 245.946C849.378 245.98 849.612 246.03 849.851 246.069C850.541 246.181 851.23 246.302 851.905 246.452C852.226 246.523 852.542 246.611 852.861 246.69C853.442 246.837 854.017 246.99 854.585 247.164C854.939 247.272 855.291 247.39 855.641 247.509C856.155 247.685 856.664 247.872 857.165 248.071C857.534 248.218 857.9 248.365 858.264 248.523C858.737 248.73 859.199 248.955 859.659 249.182C860.019 249.359 860.382 249.53 860.734 249.72C861.3 250.026 861.845 250.358 862.387 250.694C862.841 250.975 863.281 251.27 863.719 251.574C864.181 251.894 864.641 252.216 865.081 252.559C865.372 252.786 865.65 253.028 865.934 253.265C866.356 253.621 866.771 253.984 867.17 254.36C867.412 254.589 867.651 254.82 867.886 255.056C868.349 255.524 868.789 256.008 869.216 256.502C869.329 256.633 869.456 256.75 869.568 256.883C869.607 256.928 869.636 256.977 869.674 257.025C870.237 257.713 870.769 258.419 871.258 259.155C871.348 259.289 871.42 259.428 871.506 259.563C871.876 260.141 872.226 260.73 872.547 261.333C872.711 261.644 872.858 261.959 873.009 262.273C873.214 262.701 873.411 263.133 873.592 263.573C873.744 263.944 873.887 264.317 874.02 264.693C874.159 265.084 874.282 265.48 874.401 265.88C874.521 266.283 874.64 266.685 874.738 267.089C874.761 267.187 874.796 267.278 874.818 267.376L940.406 555.19L940.406 55.8693L796.698 64.6019L812.952 133.744L871.16 125.38C888.223 122.928 904.335 132.863 907.177 147.561C910.017 162.262 898.5 176.163 881.451 178.614L793.429 191.262C791.69 191.512 789.961 191.633 788.251 191.633C773.622 191.633 760.61 182.763 757.612 170.006L738.1 87.0167ZM84.9585 269.533L271.602 195.58L253.039 416.209L84.9585 269.533ZM816.029 584.068L899.079 805.504L933.658 805.504L822.768 318.909L654.384 422.707C649.156 425.929 642.904 427.685 636.477 427.737L428.553 429.424C428.453 429.425 428.354 429.425 428.254 429.425C411.105 429.425 397.127 417.511 396.965 402.695C396.803 387.793 410.683 375.6 427.966 375.46L626.016 373.853L755.594 293.977L551.031 280.886C550.945 280.88 550.861 280.876 550.774 280.87L499.184 277.567C494.411 277.262 489.781 276.016 485.652 273.926L334.221 197.253L310.549 478.62L308.877 600.474L427.826 633.837C434.142 635.608 439.638 639.067 443.525 643.71L509.148 722.139C519.261 734.226 516.096 751.091 502.077 759.81C488.062 768.529 468.499 765.8 458.385 753.713L398.741 682.429L285.891 650.776L106.757 805.504L551.23 805.504L553.667 785.977C561.22 725.431 559.835 664.182 549.546 603.934C543.776 571.269 554.835 538.027 579.912 512.865C604.986 487.701 641.439 473.27 679.916 473.27C739.576 473.27 791.96 507.954 807.307 557.617L807.487 558.201C810.279 567.23 812.914 575.759 816.029 584.068ZM246.162 608.699L247.813 488.435L62.5933 326.802L62.5933 767.261L246.162 608.699ZM612.239 595.94C609.195 578.713 615.007 561.253 628.177 548.034C641.349 534.818 660.495 527.237 680.706 527.237C712.044 527.237 739.56 545.442 747.617 571.512L747.797 572.094C750.672 581.398 753.645 591.019 757.264 600.672L834.085 805.504L614.975 805.504L616.693 791.747C624.81 726.665 623.322 660.83 612.239 595.94Z" id="Shape" fill="#676c73" fill-rule="evenodd" stroke="none" />
      </g>
    </g>
    <g id="noun_Pickaxe_2903827" transform="matrix(0.5150381 0.8571673 -0.8571673 0.5150381 1413.875 -25.08869)">
      <g id="Group" transform="translate(143.1201 44.9761)">
      </g>
      <path d="M761.536 135.193C644.003 41.2252 503.55 22.521 451.758 18.8086C447.409 7.81394 436.728 -6.10352e-05 424.214 -6.10352e-05L345.78 -6.10352e-05C333.256 -6.10352e-05 322.584 7.81394 318.226 18.8086C266.443 22.521 125.981 41.2252 8.44827 135.193C0.368426 141.649 -2.26156 152.776 2.06795 162.167L9.81549 178.981C12.398 184.574 17.1548 188.856 22.9749 190.84C25.339 191.647 27.7886 192.046 30.2382 192.046C33.8272 192.046 37.4066 191.191 40.6537 189.501C41.926 188.837 164.073 126.334 316.394 138.326C317.267 146.558 321.445 153.735 327.654 158.568L327.654 347.101C320.657 352.807 316.081 361.381 316.081 371.094L316.081 823.404C316.081 840.541 330.028 854.489 347.166 854.489L422.79 854.489C439.927 854.489 453.875 840.541 453.875 823.404L453.875 371.103C453.875 361.39 449.308 352.807 442.301 347.111L442.301 158.578C448.51 153.754 452.688 146.567 453.561 138.335C605.901 126.344 728.039 188.846 729.283 189.492C732.539 191.191 736.119 192.065 739.727 192.065C742.167 192.065 744.616 191.666 746.971 190.869C752.81 188.884 757.567 184.593 760.149 178.991L767.897 162.176C772.236 152.776 769.606 141.649 761.536 135.193ZM406.851 117.894L406.851 119.527L358.998 119.527L358.998 44.9758L406.841 44.9758L406.841 117.894L406.851 117.894ZM314.023 64.2108C280.545 67.1921 214.083 76.6297 143.121 106.519C190.992 95.7802 249.688 88.4979 314.023 93.1502L314.023 64.2108ZM451.826 93.1509C465.375 92.1635 478.686 91.7173 491.684 91.7173C540.41 91.7173 584.93 98.0406 622.718 106.519C551.766 76.6399 485.304 67.1928 451.826 64.2115L451.826 93.1509ZM370.573 164.911L370.573 340.028L395.277 340.028L395.277 164.911L370.573 164.911ZM358.998 809.542L358.998 385.583L406.841 385.583L406.841 809.542L358.998 809.542Z" transform="translate(9.155273E-05 0)" id="Shape" fill="#676c73" fill-rule="evenodd" stroke="#FFFFFF" stroke-width="17" />
    </g>
    <g id="source" transform="matrix(-0.9998477 -0.01745241 -0.01745241 0.9998477 1111 110.3498)">
      <g id="Group" transform="translate(0.0001525879 1.525879E-05)">
        <path d="M623.483 151.169C623.483 67.706 483.951 1.52588e-05 311.848 1.52588e-05C143.87 1.52588e-05 7.25394 64.5874 0.853404 145.342L0 145.342L0 657.528L0.71117 657.528C5.54713 738.939 142.803 804.265 311.848 804.265C480.893 804.265 618.149 738.939 622.985 657.528L623.554 657.528L623.554 151.169L623.483 151.169Z" transform="translate(-0.0002441406 48.54408)" id="Shape-Intersect" fill="#FFCC00" fill-rule="evenodd" stroke="none" />
        <path d="M311.847 0C483.95 0 623.481 67.7059 623.481 151.169L623.552 151.169L623.552 657.527L622.984 657.527C618.148 738.939 480.892 804.265 311.847 804.265C142.803 804.265 5.54712 738.939 0.711168 657.527L0 657.527L0 145.342L0.853403 145.342C7.25392 64.5874 143.869 0 311.847 0ZM311.563 266.966C466.456 266.966 591.977 215.182 592.048 151.333C592.048 87.4842 466.456 35.6995 311.563 35.6995C159.017 35.6995 35.1317 86.007 31.4336 148.543L31.4336 154.123C35.1317 216.741 158.946 266.966 311.563 266.966ZM592.048 311.447C591.977 375.296 466.456 427.08 311.563 427.08C158.946 427.08 35.1317 376.855 31.4336 314.237L31.4336 216.905C81.8554 267.459 188.246 302.42 311.776 302.42C435.235 302.42 541.555 267.459 591.977 217.069L592.048 311.447ZM311.563 587.194C466.456 587.194 591.977 535.41 592.048 471.561L591.977 377.183C541.555 427.655 435.235 462.534 311.776 462.534C188.246 462.534 81.8554 427.573 31.4336 377.019L31.4336 474.351C35.1317 536.969 158.946 587.194 311.563 587.194ZM592.048 653.259C591.977 717.108 466.456 768.893 311.563 768.893C158.946 768.893 35.1317 718.667 31.4336 656.049L31.4336 537.051C81.8554 587.605 188.246 622.566 311.776 622.566C435.235 622.566 541.555 587.605 591.977 537.215L592.048 653.259Z" transform="translate(20.04248 4.577637E-05)" id="Shape" fill="#676c73" fill-rule="evenodd" stroke="none" />
      </g>
    </g>
    <path d="M0 63.6397L138.479 0L124.706 189.86L0 63.6397L0 63.6397Z" transform="matrix(0.656059 -0.7547095 0.7547095 0.656059 1307.789 763.4054)" id="Shape-path" fill="#3399CC" stroke="#303235" stroke-width="0" />
    <path d="M0 63.6397L138.479 0L124.706 189.86L0 63.6397L0 63.6397Z" transform="matrix(0.656059 -0.7547095 0.7547095 0.656059 1285.789 735.4054)" id="Shape-path-5" fill="none" stroke="#303235" stroke-width="34" />
    <path d="M0 37.1594L80.8582 0L72.8164 110.86L0 37.1594L0 37.1594Z" transform="matrix(0.1391731 -0.9902681 0.9902681 0.1391731 1675.504 181.6397)" id="Shape-path-2" fill="#66CC66" stroke="#303235" stroke-width="0" />
    <path d="M0 37.1594L80.8582 0L72.8164 110.86L0 37.1594L0 37.1594Z" transform="matrix(0.1391731 -0.9902681 0.9902681 0.1391731 1675.504 181.6397)" id="Shape-path-6" fill="none" stroke="#303235" stroke-width="34" />
    <path d="M0 37.1594L80.8582 0L72.8164 110.86L0 37.1594L0 37.1594Z" transform="matrix(0.7986355 0.6018149 -0.6018149 0.7986355 1680.556 832.0358)" id="Shape-path-4" fill="#CC3399" stroke="none" />
    <path d="M0 37.1594L80.8582 0L72.8164 110.86L0 37.1594L0 37.1594Z" transform="matrix(0.7986355 0.6018149 -0.6018149 0.7986355 1657.556 815.0358)" id="Shape-path-3" fill="none" stroke="#303235" stroke-width="34" />
    <path d="M0 66L122 0" transform="translate(1274 329)" id="New-shape" fill="#676c73" stroke="#303235" stroke-width="13" />
    <path d="M0 36L61 0" transform="translate(1291 316)" id="New-shape-2" fill="#676c73" stroke="#303235" stroke-width="13" />
  </g>
</svg>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;