<script>
  import logo from '$lib/assets/images/logo_1024.png';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home page" />
</svelte:head>

<div class="flex justify-center">
  <picture>
    <source srcset={logo} type="image/webp" />
    <img src={logo} alt="logo" width="512" height="512" />
  </picture>
</div>

<div class="prose">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget hendrerit ex. Duis vulputate
    dictum rutrum. Aenean eu quam neque. Aliquam erat volutpat. Nam pretium vel neque in
    consectetur.
  </p>
  <p>
    Vivamus enim erat, lobortis eget metus ac, convallis finibus eros. Duis blandit pretium mi,
    pellentesque congue nibh facilisis rhoncus. Integer nec nunc in libero vulputate blandit sed et
    magna. Etiam eget pharetra ante, eget scelerisque odio. In facilisis, nulla sit amet ultricies
    pellentesque, turpis nulla ultrices velit, non pulvinar elit massa eget tortor. Vivamus quis
    fringilla arcu, ac lobortis lorem. Ut at purus diam. Etiam eros diam, dapibus et posuere sed,
    maximus in nisl.
  </p>
  <p>
    Nunc condimentum rutrum lacus, non accumsan nisi gravida quis. Sed in justo vitae tortor
    ultrices elementum quis sed lectus. Phasellus luctus erat non massa volutpat, nec hendrerit leo
    tincidunt. Duis porta id dui sodales venenatis. Pellentesque consectetur massa eget lobortis
    ultrices. Maecenas eget justo nec purus various consequat. Nunc feugiat, lacus eu tristique
    commodo, orci orci consectetur velit, convallis sodales orci nisi ac enim. Quisque sed erat et
    tortor aliquet facilisis non quis enim. Nam tristique ut mauris in venenatis. Vivamus iaculis
    ultricies dolor, quis aliquam ipsum hendrerit sit amet. Duis suscipit libero at viverra
    suscipit. Fusce cursus ut dolor quis rhoncus. Etiam ac malesuada ex. Mauris sit amet tellus
    velit. Quisque iaculis eget leo luctus malesuada. Quisque molestie imperdiet nisl at
    sollicitudin. Etiam ultrices interdum est, non rhoncus nisl venenatis sed. Duis tincidunt est
    congue sem ornare ultricies nec quis arcu. Duis tincidunt maximus erat, nec sodales est lacinia
    vitae.
  </p>
  <p>
    Donec volutpat ac velit et ultrices. Phasellus mauris diam, imperdiet ut est vel, congue
    scelerisque ipsum. Suspendisse viverra ex id orci various, commodo condimentum augue porta.
    Quisque at sapien metus. Nunc dolor ante, ultrices fringilla imperdiet in, congue at lorem. Ut
    at tortor ut libero hendrerit luctus ac ut leo. Duis sit amet quam gravida, laoreet odio sed,
    viverra lacus. Proin a tempus nisl. Nunc non aliquam velit, in tempus tellus.
  </p>
  <p>
    Aenean tempor lectus eget efficitur vehicula. Interdum et malesuada fames ac ante ipsum primis
    in faucibus. Sed eu leo et orci gravida feugiat vel sit amet elit. Aenean dui velit, pharetra
    sed sagittis ac, mattis non ipsum. Nullam luctus sagittis congue.
  </p>
</div>
