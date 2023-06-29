# Spectral sequences
## Spectra
### [S0](./mix/S0_ss/index.html)-modules
[C2](./mix/C2_ss/index.html), [Ceta](./mix/Ceta_ss/index.html), [Cnu](./mix/Cnu_ss/index.html), [Csigma](./mix/Csigma_ss/index.html)<br>
[C2∧Ceta](./mix/C2_Ceta_ss/index.html), [Ceta∧Cnu](./mix/Ceta_Cnu_ss/index.html)<br>
[CW_2_eta](./mix/CW_2_eta_ss/index.html), [CW_eta_2](./mix/CW_eta_2_ss/index.html), [CW_eta_nu](./mix/CW_eta_nu_ss/index.html), [CW_nu_eta](./mix/CW_nu_eta_ss/index.html)<br>
[C2h4](./mix/C2h4_ss/index.html), [C2h5](./mix/C2h5_ss/index.html), [C2h6](./mix/C2h6_ss/index.html)<br>
[DC2h4](./mix/DC2h4_ss/index.html), [DC2h5](./mix/DC2h5_ss/index.html), [DC2h6](./mix/DC2h6_ss/index.html)<br>
[RP4](./mix/RP1_4_ss/index.html), [RP6](./mix/RP1_6_ss/index.html), [RP8](./mix/RP1_8_ss/index.html), [RP10](./mix/RP1_10_ss/index.html), [RP12](./mix/RP1_12_ss/index.html), [RPinf](./mix/RP1_256_ss/index.html)<br>
[CPinf](./mix/CP1_128_ss/index.html)<br>
[j](./mix/j_ss/index.html), [j/2](./mix/j_C2_ss/index.html)<br>

### [tmf](./mix/tmf_ss/index.html)-modules
[tmf∧C2](./mix/tmf_C2_ss/index.html), [tmf∧Ceta](./mix/tmf_Ceta_ss/index.html), [tmf∧Cnu](./mix/tmf_Cnu_ss/index.html)<br>
tmf∧RP4, ...

### ko-modules

### [X2](./mix/X2_ss/index.html)-modules

## Maps
$S^0$

## Cofiber sequences

<div class="mermaid">
  graph TD;
      <a href='./mix/C2_ss/index.html'> C2</a>-->S0;
      Ceta-->S0;
      Cnu-->S0;
      Csigma-->S0;
      C2-->RP1_4;
      RP1_4-->RP1_6;
      RP1_6-->RP1_8;
      RP1_8-->RP1_10;
      RP1_10-->RP1_12;
      RP1_12-->RP1_256;
      RP1_4-->C2;
      RP1_6-->RP3_6;
      RP3_6-->C2;
      RP1_8-->RP1_4;
      RP1_10-->C2;
      RP1_12-->RP1_4;
      CW_eta_2-->RP1_6;
      RP1_6-->CW_2_eta;
      RP1_256-->S0;
      RP1_256-->CP1_128;
      CP1_128-->S0;
      C2-->C2h4;
      C2-->C2h5;
      C2-->C2h6;
      C2h4-->S0;
      C2h5-->S0;
      C2h6-->S0;
      DC2h4-->C2;
      DC2h5-->C2;
      DC2h6-->C2;
      Ceta-->CW_eta_2;
      CW_eta_2-->C2;
      C2-->CW_2_eta;
      CW_2_eta-->Ceta;
      Ceta-->CW_eta_nu;
      CW_eta_nu-->Cnu;
      Cnu-->CW_nu_eta;
      CW_nu_eta-->Ceta;
      C2-->C2_Ceta;
      Ceta-->C2_Ceta;
      C2_Ceta-->C2;
      C2_Ceta-->Ceta;
      Ceta-->Ceta_Cnu;
      Cnu-->Ceta_Cnu;
      Ceta_Cnu-->Ceta;
      Ceta_Cnu-->Cnu;
      S0-->tmf;
      S0-->j;
</div>
