package com.pharmapartners.medicomGo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.jdbcAuthentication().dataSource(dataSource)
                .passwordEncoder(NoOpPasswordEncoder.getInstance())
                .usersByUsernameQuery("select username,password,enabled "
                        + " from practitioners "
                        + " where username = ? ")
                .authoritiesByUsernameQuery("select username, role "
                        + " from practitioners "
                        + " where username = ? ");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.httpBasic();
        http.formLogin().disable();
        http
                .authorizeRequests()
                .antMatchers("/allergies/**").hasAuthority("USER")
                .antMatchers("/appointments/**").hasAuthority("USER")
                .antMatchers("/diseases/**").hasAuthority("USER")
                .antMatchers("/results/**").hasAuthority("USER")
                .antMatchers("/prescription/**").hasAuthority("USER")
                .antMatchers("/notes/**").hasAuthority("USER")
                .antMatchers("/patients/**").hasAuthority("USER")
                .antMatchers("/vaccine/**").hasAuthority("USER")
                .antMatchers("/").permitAll()
                .and().cors()
                .and().csrf().disable();
    }

}
