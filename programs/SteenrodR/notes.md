## Grading
$|\tau|=(0, 1)$

$|\rho|=(1, 1)$

$|Sq^1|=(1, 0)$

$|Sq^{2i}|=(2i, i)$

$|Sq^{2i+1}|=(2i+1, i)$

## Cartan formula
$$Sq^{2i}(u\times v)=\sum_{a+b=i}Sq^{2a}(u)\times Sq^{2b}(v)+\tau\sum_{a+b=i-1}Sq^{2a+1}(u)\times Sq^{2b+1}(v)$$
$$Sq^{2i+1}(u\times v)=\sum_{a+b=2i+1}Sq^{a}(u)\times Sq^{b}(v)+\rho\sum_{a+b=i-1}Sq^{2a+1}(u)\times Sq^{2b+1}(v)$$

## Adem relations
$\tau_i^2=\tau\xi_{i+1}+\rho\tau_{i+1}$

$\tau_i^{2^m}=\sum_{j=1}^m \rho^{2^m-2^{m-j+1}}\tau^{2^{m-j}}\xi_{i+j}^{2^{m-j}}+\rho^{2^m-1}\tau_{i+m}$

$\tau_0^{2^m} = \sum_{j=1}^m \rho^{2^m-2^{m-j+1}}\tau^{2^{m-j}}\xi_{j}^{2^{m-j}}+\rho^{2^m-1}\tau_{m}$

In $H^*$, $\theta \tau^m=\langle (\tau+\rho\tau_0)^m, \theta \rangle = \langle \tau^{2^m}+\rho^{2^m}\tau_0^{2^m}, \theta \rangle$

$Sq^1\tau=\tau Sq^1+\rho$

$Sq^{2n}\tau=\tau Sq^{2n}+ \rho\tau Sq^{2n-1}$

$Sq^{2n}\tau^{2^m}=\tau^{2^m}Sq^{2n}+\rho^{2^m}\tau^{2^{m-1}}Sq^{2n-2^m}$, $m\ge 1$.

$Sq^{2n+1}\tau=\tau Sq^{2n+1} + \rho Sq^{2n}$

For $0<a<2b$.
$$Sq^aSq^b=\begin{cases}
\sum_{j=0}^{[a/2]}\binom{b-1-j}{a-2j}Sq^{a+b-j}Sq^j & a \text{ odd}\\
\sum_{j=0}^{[a/2]}\tau^\varepsilon\binom{b-1-j}{a-2j}Sq^{a+b-j}Sq^j+\rho\sum_{j}^{[a/2]} (b-1-j)\binom{b-1-j}{a-2j}Sq^{a+b-j-1}Sq^j & a \text{ even}
\end{cases}$$
where $\varepsilon=1$ iff $b$ is even and $j$ is odd.